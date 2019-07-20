import React from 'react';
import { StyledForm } from './FormStyles';

function Form ({children}) {
    return (
        <StyledForm>
            { children }
        </StyledForm>
    )
};

export default Form;