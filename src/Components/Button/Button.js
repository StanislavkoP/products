import React from 'react'
import { StyledButton } from './ButtonStyles';

function Button(props) {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <StyledButton {...otherProps}>
            { children }
        </StyledButton>
    )
}

export default Button;
