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
    const [textState, setTextState] = useState('nameent <b data-bold="bold">entered</b> here here else <b data-bold="bold"> other bold text</b>');
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


        let textBold = `<b data-bold="bold">${textINeed}</b> here else <b data-bold="bold"> other bold text</b>`;
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
        let startNode = getInnerNode([...start]);
        let endNode = getInnerNode([...end]);
        let isBoldConfigStart = toggleBold(startNode);
        let isBoldConfigEnd = toggleBold(endNode)
        console.log(isBoldConfigStart, isBoldConfigEnd);


        const howDeepBoldConf = howDeep(start, end);
        console.log(howDeepBoldConf);
        howDeepBoldConf.isBoldStart = isBoldConfigStart;
        howDeepBoldConf.isBoldEnd = isBoldConfigEnd;

        if (isBoldConfigStart.bold || isBoldConfigEnd.bold) {
            unbold(howDeepBoldConf, startNode, endNode, start, end);
        }

    }

    const unbold = ({ isBoldStart, isBoldEnd, ...startEndConf }, startNode, endNode, startArr, endArr) => {

        if (isBoldStart.bold && isBoldEnd.bold) {
            if (isBoldStart.boldElement === isBoldEnd.boldElement) {
                console.log(isBoldStart.boldElement)
                const { boldElement } = isBoldStart;

                boldBefore(boldElement, startArr, endArr, startNode, endNode);
                // boldAfter(boldElement, endArr, endNode);
                let addToBold = document.createElement('span');
                addToBold.innerHTML = boldElement.innerHTML;

                boldElement.replaceWith(addToBold)
                setTextState(divShowerRef.current.innerHTML)
            } else {

            }
        } else {
            const bold = isBoldStart.bold ? isBoldStart : isBoldEnd;


        }
    }





    const boldBefore = (boldElement, startArr, endArr, startNode, endNode) => {
        let startArrCopy = startArr.slice().reverse();
        let endArrCopy = endArr.slice().reverse();
        let currentElement = startNode;

        while (boldElement && boldElement !== currentElement) {
            
            
            debugger
            if (isText(currentElement)) {

                const parent = currentElement.parentNode;
                let index = startArrCopy.pop();
                let endIndex = endArrCopy.pop();


                let { makePrevBold, toggle } = before(parent, currentElement, index, endIndex);
                let { makeAfterBold } = after(parent, currentElement, index, endIndex);

                parent.innerHTML = '';
                parent.append(makePrevBold, toggle, makeAfterBold);
                currentElement = parent;

            } else {

                let upToIndex = startArrCopy.pop();
                for (let i = upToIndex; i > 0; i--) {
                    console.log(upToIndex)
                    let parent = currentElement.parentNode;
                    let makeBoldChild = parent.children[i];
                    let makeBold = document.createElement('b');
                    makeBold.dataset.bold = "bold";
                    makeBold.append(makeBoldChild);
                    parent.prepend(makeBold);
                    currentElement = currentElement.parentNode;
                }
            }
        }
    }

    const toggleBold = (children) => {
        const editor = divShowerRef.current;
        let parent = children.parentNode
        let config = { bold: false, boldElement: null }
        while (true) {
            if (parent === editor) break;
            config.bold = config.bold ? true : parent.matches('[data-bold]');
            // if (parent.matches('[data-bold]')) {
            //     config.boldElement = parent;
            // } UNCOMMENT IT IS WORKING VARIANT
            if (config.bold) {
                config.boldElement = parent;
            }
            children = parent;
            parent = parent.parentNode;
        }
        return config;
    }

    function before(parent, current, index, endIndex) {
        let makeBold = current.data.slice(0, index);
        console.log(index, endIndex)
        let toggle = document.createTextNode(current.data.slice(index, endIndex));
        let makePrevBold = document.createElement('b');
        makePrevBold.dataset.bold = "bold";
        makePrevBold.append(makeBold);
        return { makePrevBold, toggle }
    }

    function after(parent, current, index, endIndex) {
        let makeBold = document.createTextNode(current.data.slice(endIndex));
        let toggle = current.data.slice(index, endIndex);
        let makeAfterBold = document.createElement('b');
        makeAfterBold.dataset.bold = "bold";
        makeAfterBold.append(makeBold);
        return { makeAfterBold, toggle }
    }


    const boldAfter = (boldElement, endArr, endNode) => {
        let startArrCopy = endArr.slice().reverse();
        let currentElement = endNode;
        while (boldElement !== currentElement) {
            console.log('loop')

            if (isText(currentElement)) {

                const parent = currentElement.parentNode;
                let index = startArrCopy.pop();
                let makeBold = document.createTextNode(currentElement.data.slice(index));
                let toggle = currentElement.data.slice(0, index);
                let makePrevBold = document.createElement('b');
                makePrevBold.dataset.bold = "bold";
                makePrevBold.append(makeBold);
                parent.innerHTML = '';
                currentElement = parent;
                parent.append(makePrevBold, toggle);

            } else {
                let upToIndex = startArrCopy.pop();
                let parent = currentElement.parentNode.children;
                for (let i = upToIndex; i < parent.length; i++) {
                    let makeBoldChild = parent[i];
                    let makeBold = document.createElement('b');
                    makeBold.dataset.bold = "bold makeb old hcod";
                    makeBold.append(makeBoldChild);
                    parent.prepend(makeBold);
                    currentElement = parent;
                }
            }
        }
    }


    // is text check 

    const isText = (node) => {
        return (node.nodeName) === "#text" ? true : false;
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
                        let [startArr, endArr,a,b] = positions;
                        console.log(`here is positions array from getPositions`)
                        console.log(startArr, endArr);
                        console.log(a,b)
                        console.log('--------------')
                        setSelections([startArr,endArr]);

                    }
                })
        },
        []
    )

    const getPositions = (anchor, start, focus, end) => {
        const [startPosition, a] = extract(anchor, start);
        const [endPosition, b] = extract(focus, end);

        return [startPosition, endPosition, a, b];
    }

    function extract(children, position) {
        let editor = divShowerRef.current;
        let parentNode;


        let positionStart = [position];
        let positionsAndNames = [position,];

        if (children !== editor) {

            parentNode = children.parentNode;

            while (true) {

                for (let i = 0; i < parentNode.childNodes.length; i++) {
                    if (parentNode?.childNodes[i] === children) {
                        positionStart.push(i);
                        positionsAndNames.push([i, children.nodeName])
                    }
                }
                if (parentNode === editor) break;



                children = parentNode;
                parentNode = parentNode.parentNode;
            }

        }

        return [positionStart, positionsAndNames];
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
