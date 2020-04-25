import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import './List.css';

function List(props) {
    const [showDropdown, setDropdownShow] = useState(false);
    const history = useHistory();

    const { item, onClick } = props;
    const { subCategories = [], href } = item;

    const showDropdownHandler = (event) => {
        if(href){
            history.push(href);
        }
        setDropdownShow(!showDropdown)
    }

   


        return (
            <div>
                <div className="container mainClick" onClick={showDropdownHandler}>
                    <div className="textSidebar">{item.text}</div>
                </div>
                {
                    (!!subCategories.length && showDropdown) &&
                    <ul className='hiddenDropdown ui vertical buttons'>
                        {
                            subCategories.map(category => {
                                return <button className="ui button">
                                    <a href='#'>{category.text}</a>
                                </button>
                            })
                        }
                    </ul>
                }
            </div>
        )
    
}

export default List;

List.propTypes = {
    item: PropTypes.object.isRequired,
}