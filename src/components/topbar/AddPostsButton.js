import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Topbar.module.css';
import { dataForNavbar } from '../app/data';


export default function (props) {
    const [showAddButtons, setShow] = useState(false);

    const { data } = props;

    const addButtonsHandler = (event) => {
        console.log('addButton<S> was clicked');
        setShow(!showAddButtons);
        console.log(showAddButtons)
    }

    const addButtonHandler = (event) => {
        console.log(`
            Add Post or Add Lesson was cliked
            need to add function body when you handle api
        `)
    }

   

    return (
        <div className={styles.addPostNavbar} >
            <li 
                className={styles.addPostItem}
                onClick={addButtonsHandler}
            >
                <i className="caret big down  icon"></i>
            </li>

            {(showAddButtons && !!data.length) &&
                <div className={styles.mainAddButtons} onMouseLeave={addButtonsHandler}>
                <div className={`${styles.mainAddButtonsItem}`}>
                    {
                        data.map((addButton) => {
                            return (
                                <button 
                                    className={` ${styles.addButton}`}
                                    onClick={addButtonHandler}
                                   
                                >
                                    {addButton.text}
                                </button>
                            );
                        })
                    }
                </div>
                    <div className={styles.tooltipArrow}>div</div>
                </div>
            }

        </div>
    )
}