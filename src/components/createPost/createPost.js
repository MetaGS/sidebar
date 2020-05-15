import React, { useState, useEffect, useRef } from 'react';

import styles from './createPost.module.css';
import Parser from './editorParser';

export default function (props) {
    const [h1State, h1TurnOn] = useState(false);
    const divShowerRef = useRef();
    const [editorText, setEditorText] = useState(
        [{ 
            state: 'div', 
            text: '', 
            current: true,
            id: Math.random(),
        }]
    );

    const h1Click = (event) => {
        const copy = [...editorText];
        copy.forEach(item=>{item.current = false})
        // if(!h1State){
            const last = copy[copy.length - 1];
            if(last.state !== 'h1') {
                copy.push({
                    state: 'h1',
                    text: '',
                    current: true,
                    id: Math.random().toFixed(10),
                })
            } else {
                copy.push({
                    state: 'div',
                    text: '',
                    current: true,
                    id: Math.random(),
                })
            }
        // }
        // h1TurnOn(!h1State);
        setEditorText(copy);
    }

    function handleChange(event) {
        const copy = [...editorText];
        const value = event.target.value;
        const [last] = copy.filter(item=> item.current);
        last.text = value;
        // {if (h1State) {
        //     if (last.state === 'h1') {
        //         last.text = value;
        //     } else {
        //         copy.push({
        //             state: 'h1',
        //             text: value,
        //             current: true,
        //         });
        //     }
        // } else {
        //     if (last.state === 'h1') {
        //         copy.push({
        //             state: 'div',
        //             text: value,
        //             current: true,
        //         })
        //     } else {
        //         last.text = value;
        //     }
        // }}
        setEditorText(copy);
    }

    function handleValue(event) {
        console.log(`handleValue called!!!=====`)
        const [current] = editorText.filter((item)=>item.current);
        return current.text;
    }



    /// for div shower functions
    useEffect(
       ()=>{
           console.log(divShowerRef.current.innerHTML);
       }
    )

    function showOnChange(event) {

    }


    return (
        <div className={styles.mainBack}>
            <div className="container1200">
                <div className={styles.main}>
                    <div className={styles.settings}></div>
                    <div className={styles.editorTop}>

                        <div className={styles.header}>
                            <input
                                type="text"
                                placeholder="Enter Header For Post"
                            />
                        </div>

                        <div className={styles.editor}>
                            <button
                                className={styles.turnOnH1}
                                onClick={h1Click}
                            >H1</button>
                            <div className={styles.textarea}>
                                <textarea
                                    className={styles.editorSelf}
                                    onChange={handleChange}
                                    value={handleValue()}
                                    name="editor" rows="10"
                                    placeholder="Enter your text"
                                >
                                </textarea>

                            </div>
                            <div className="show"
                                 ref={divShowerRef}
                                 onInput={(event)=>{
                                     const value = event.target.value;
                                     console.log(value);
                                 }}
                                 contentEditable
                            >
                                {
                                    editorText.map(function (text) {
                                        if (text.state === 'h1') {
                                            return <h1 dataId={text.id}>{text.text}</h1>;
                                        } else {
                                            return (
                                                <div
                                                    className={styles.redText}
                                                >{text.text}
                                                </div>
                                            );
                                        }
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
