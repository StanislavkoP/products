import React from 'react';
import { StyledTextArea } from './TextAreaStyles';

function TextArea(props) {
    const {
        name,
        onChange,
        value,
        ...otherProps

    } = props;

    return (
        <StyledTextArea name={name} onChange={onChange} value={ value } {...otherProps}/>
    )
}

export default TextArea;
