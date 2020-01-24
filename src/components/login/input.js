import React, { Component, useState } from 'react';

export function Input(props) {
    const isCheckbox = props.type === 'checkbox' ? props.text : '' ;

    return (
        <label for={props.name}>
            {!isCheckbox && props.text}
            <input 
                type={props.type}
                placeholder={props.placeholder}
                id={props.name}
                value={props.value}
                checked={props.isChecked}
                name={props.name}
                onChange={props.onChange} />
            {isCheckbox}
        </label>

    )
}