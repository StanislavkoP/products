import React from 'react';
import { StyledTextArea } from './TextAreaStyles';

function TextArea(props) {
    const {
        name,
        onChange

    } = props;

    return (
        <StyledTextArea name={name} onChange={onChange} />
    )
}

export default TextArea;
