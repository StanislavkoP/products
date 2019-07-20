import React from 'react'
import { StyledInputText } from './InputTextStyles';

function InputText(props) {
    const {
        name,
        onChange

    } = props;

    return (
        <StyledInputText 
            type="text"
            name={ name }
            onChange={ onChange }
        />
    )
}

export default InputText;
