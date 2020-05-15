import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useDropdown from '../utils/useDropdown';
import styles from './Topbar.module.css';
import { dataForNavbar } from '../app/data';


export default function (props) {
    const [showAddButtons, setShow] = useState(false);

    const { data } = props;

  

    const addButtonHandler = (event) => {
        console.log(`
            Add Post or Add Lesson was cliked
            need to add function body when you handle api
        `)
    }

    const dropdownToggler = (
        <li className={styles.addPostItem} >
            <i className="caret big down  icon"></i>
        </li>
    );

    const dropdownSelf = (
        <div className={styles.mainAddButtons} >
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
        </div>
    );
   

    return useDropdown(
        dropdownToggler,
        dropdownSelf,
        {
            top: '-4px',
            left: '12px'
        }
    )
           
}