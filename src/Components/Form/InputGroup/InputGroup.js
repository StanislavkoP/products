import React from 'react';
import { StyledInputGroup, StyledLabel } from './InputGroupStyles';

function InputGroup ({ labelText, children }) {
    return (
        <StyledInputGroup>
            <StyledLabel>
                { labelText }
            </StyledLabel>
            { children }
        </StyledInputGroup>

    )
};

export default InputGroup;