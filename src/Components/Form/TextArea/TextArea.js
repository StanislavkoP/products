import React from 'react';
import { StyledTextArea } from './TextAreaStyles';

function TextArea(props) {
    const {
        name,
        onChange,
        value

    } = props;

    return (
        <StyledTextArea name={name} onChange={onChange} value={ value }/>
    )
}

export default TextArea;
