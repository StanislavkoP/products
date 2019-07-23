import React from 'react';
import { StyledInputGroup, StyledLabel } from './InputGroupStyles';

function InputGroup ({ labelText, children, ...props }) {
    return (
        <StyledInputGroup {...props}>
            <StyledLabel>
                { labelText }
            </StyledLabel>
            { children }
        </StyledInputGroup>

    )
};

export default InputGroup;