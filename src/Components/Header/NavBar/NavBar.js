import React from 'react';

import { StyledNavBar } from './NavBarStyles';
import NavLink from './NavLink/NavLink';

function NavBar ({isLoggedIn}) {

    let links = (
        <NavLink href="/auth">Auth</NavLink>
    );

    if (isLoggedIn) {
        links = (
            <NavLink href="/logout">Log Out</NavLink>
        )
    }

    return (
        <StyledNavBar>
            { links }
        </StyledNavBar>
    )
};

export default NavBar;