import React, { useState, useEffect, useRef } from 'react';
import ContentEditable from './contenEditor';

import styles from './createPost.module.css';
import Parser from './editorParser';

export default function (props) {
    // ---------------component setup--------------


    const divShowerRef = useRef();
    const [editorText, setEditorText] = useState();
    const [[selectionStart, selectionEnd], setSelections] = useState([0, 0]);
    const [[text, textLength], setTextAndLength] = useState([]);
    const [bolds, addBold] = useState([]);
    const [textState, setTextState] = useState('nameent <b data-bold="bold">entered</b> here');
    const [isEditableDisabled, setEditable] = useState(false);



    // ----------------component methods------------
    //clicks
    const h1Click = (event) => {

    }



    //handlers
    function handleChange(event) {

        console.log(event.target.value)
        setTextState(event.target.value);
    }

    // -------- Handle Bold click ------------------========

    const handleBold = (event) => {
        console.log('handle bold Called')
        let editor = divShowerRef.current;
        let start = selectionStart[0];
        let end = selectionEnd[0];
        let textCopy = textState;
        let textINeed = textState.slice(start, end);

        let bold = <b>{textINeed}</b>;
        let textBold = `<b data-bold="bold">${textINeed}</b>`;
        let exactNew = textCopy.replace(textINeed, textBold);


        console.log(`
            textIneed: ${textINeed}
            newText  : ${textCopy}
            exactNew : ${exactNew}
        `)
        window.getSelection().removeAllRanges();
        setTextState(exactNew)
    }

    const handleBoldTrial = (event) => {

        console.log('handle bold Called')
        // let editor = divShowerRef.current;
        let start = [...selectionStart];
        let end = [...selectionEnd];
        // let textCopy = textState;
        // let textINeed = textState.slice(start, end);
        let startNode = getInnerNode([...start]);
        let endNode = getInnerNode([...end]);
        let isBoldConfigStart = toggleBold(startNode);
        let isBoldConfigEnd = toggleBold(endNode)
        console.log(isBoldConfigStart, isBoldConfigEnd);
    
        
        const howDeepConf = howDeep(start, end);
        // console.log(JSON.stringify(howDeepConf));
        console.log(howDeepConf)
        // console.log(`
        //     startNode: ${startNode}
        //     endNode: ${endNode}
        // `)

    }


    const getInnerNode = (positionArray) => {
        let editor = divShowerRef.current;
        let elementSelf = editor;

        while (positionArray.length) {
            if (elementSelf.nodeName !== '#text') {
                elementSelf = elementSelf.childNodes[positionArray.pop()]

            } else {
                break;
            }
        }
        return elementSelf;
    }


    const howDeep = (startArr, endArr) => {
        // console.log(`
        //     start And end 
        //     Before stabilizing: ${startArr} and ${endArr}`
        // );

        const configuration = {
            shorter: [...startArr.length > endArr.length ? endArr : startArr],
            longer: [...startArr.length > endArr.length ? startArr : endArr],
            isSameLength: startArr.length === endArr.length,
            textPositionStart: startArr[0],
            texPositionEnd: endArr[0],
        }
        startArr = startArr.slice(1);
        endArr = endArr.slice(1);
        const stabilize = Math.min(startArr.length, endArr.length);
        configuration.longsExtraPart = configuration.longer.slice(stabilize);

        startArr = startArr.reverse().slice(0, stabilize).reverse();
        endArr = endArr.reverse().slice(0, stabilize).reverse();
        configuration.stabilizedStartEnd = [startArr.slice(), endArr.slice()]
        // console.log(startArr, endArr);


        let commonElement1 = getInnerNode(startArr)
        let commonElement2 = getInnerNode(endArr);

        let howDeep = 0;

        while (commonElement1 !== commonElement2) {
            // console.log(commonElement1);
            // console.log(commonElement2);
            // console.log('one runn')
            commonElement1 = commonElement1.parentNode;

            commonElement2 = commonElement2.parentNode;
            howDeep++;
        }


        configuration.commonParent = commonElement1;
        // console.log(`howDeep: ${howDeep}`);
        configuration.howDeep = howDeep;
        return configuration;
    }


    const toggleBold = (children) => {
        const editor = divShowerRef.current;
        let parent = children.parentNode
        let config = { bold: false, boldElement: null }
        while (true) {
            // console.log('parentNonde');
            // console.log(parentNode)
            if (parent === editor) break;
            config.bold = parent.matches('[data-bold]');
            if (config.bold) {
                config.boldElement = parent;
            }
            children = parent;
            parent = parent.parentNode;
        }
        return config;
    }




    // --------- End of bold click ------------============




    // -----------Extract Position Functions --------------
    useEffect(
        () => {
            console.log('Use Effect only on Mounting');
            document.addEventListener('selectionchange',
                function selectionHandler(event) {
                    if (document.activeElement === divShowerRef.current) {

                        const selection = document.getSelection();

                        const { anchorNode, anchorOffset: start, focusNode, focusOffset: end } = selection;

                        let positions = getPositions(anchorNode, start, focusNode, end);
                        console.log(...positions);
                        setSelections(positions);

                    }
                })
        },
        []
    )

    const getPositions = (anchor, start, focus, end) => {
        const [startPosition, ] = extract(anchor, start);
        const [endPosition, ] = extract(focus, end);

        return [startPosition, endPosition];
    }

    function extract(children, position) {
        let editor = divShowerRef.current;
        let parentNode;

        // console.log(typeof children)
        // console.log(children)
        // console.log(children.nodeName)
        let positionStart = [position];
        let config = { bold: false };
        // console.log('parentNonde');
        // console.log(parentNode)
        // console.log('anchor');
        // console.log(children)
        if (children !== editor) {
            // debugger
            // if(children.nodeName === '#text') 
            // {
            //     children = children.parentNode
            //     console.log('redefined children inside if 143');
            //     console.log(children)

            // };
            parentNode = children.parentNode;

            while (true) {
                // console.log('parentNonde');
                // console.log(parentNode)
                for (let i = 0; i < parentNode.childNodes.length; i++) {
                    if (parentNode?.childNodes[i] === children) {
                        positionStart.push(i);

                    }

                }
                if (parentNode === editor) break;
                console.log(children.nodeName);
                console.log(parentNode.nodeName)

                config.bold = parentNode.matches('[data-bold]');
                if (config.bold) {
                    config.boldElement = parentNode;
                }
                children = parentNode;
                parentNode = parentNode.parentNode;
            }

        }
        return [positionStart];
    }


    // Extract Positions Functions end -------------------





    useEffect(
        () => {
            // const selection = document.getSelection();
            // const target = document.createTextNode('');
            // divShowerRef.current.append(target);

            // const range = document.createRange();
            // range.setStart(target, target.data.length);
            // range.collapse(true);

            // selection.removeAllRanges();
            // selection.addRange(range)
        }
    )



    return (
        <div className={styles.mainBack}>
            <div className="container1200">
                <div className={styles.main}>
                    <div className={styles.settings}></div>
                    <div className={styles.editorTop}>

                        {/* Header */}
                        <div className={styles.header}>
                            <input
                                type="text"
                                placeholder="Enter Header For Post"
                            />
                        </div>
                        {/*---*/}

                        <div className={styles.editor}>

                            {/* Buttons */}
                            <button
                                className={styles.turnOnH1}
                                onClick={h1Click}
                            >
                                H1
                            </button>

                            <button
                                className={styles.turnOnH1}
                                onClick={handleBoldTrial}
                            >
                                <b>B</b>
                            </button>
                            {/* --- */}

                            {/*text editor was here */}
                            <ContentEditable
                                className={`${styles.show} editorRoot`}
                                disabled={isEditableDisabled}
                                html={textState}
                                onChange={handleChange}
                                contentEditable
                                innerRef={divShowerRef}
                            // dangerouslySetInnerHTML={{__html:text}}


                            >
                                {text}

                            </ContentEditable>

                        </div>{/* styles.editor */}
                    </div>
                </div>
            </div>
        </div>
    );
}
