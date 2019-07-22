import React from 'react';
import { StyledForm } from './FormStyles';

function Form ({children, ...props}) {
    return (
        <StyledForm {...props}>
            { children }
        </StyledForm>
    )
};

export default Form;