import React from 'react';

import { useStateValue } from '../../state/StateContext';

import { StyledHeader, HelloUserText } from './HeaderStyles';
import NavBar from './NavBar/NavBar';

function Header () {
    const [{ userName , isLoggedIn }] = useStateValue();
    
    return (        
        <StyledHeader>
            {
                isLoggedIn && userName && <HelloUserText>Hello, { userName }!</HelloUserText>
            }
            <NavBar isLoggedIn={ isLoggedIn }/>
        </StyledHeader>
    )
};

export default Header;