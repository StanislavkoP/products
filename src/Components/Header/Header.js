import React from 'react';

import { useStateValue } from '../../state/StateContext';

import { StyledHeader } from './HeaderStyles';
import NavBar from './NavBar/NavBar';

function Header () {
    const [{ userName , isLoggedIn }] = useStateValue();
    
    return (        
        <StyledHeader>
            {
                isLoggedIn && <p>Hello, { userName }</p>
            }
            <NavBar isLoggedIn={ isLoggedIn }/>
        </StyledHeader>
    )
};

export default Header;