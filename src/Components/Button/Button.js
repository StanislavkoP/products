import React from 'react'
import { StyledButton, ChildrenWrapp } from './ButtonStyles';
import SimpleSpinner from '../SimpleSpinner/SimpleSpinner';


function Button(props) {
    const {
        children,
        isLoading,
        ...otherProps

    } = props;

    return (
        <StyledButton {...otherProps} isLoading={isLoading}>
            { 
                isLoading && <SimpleSpinner/>
            }
            <ChildrenWrapp isLoading={isLoading}>{ children }</ChildrenWrapp>
        </StyledButton>
    )
}

export default Button;
