import React from 'react';
import { usePath } from 'hookrouter';

import { StyledNavBar } from './NavBarStyles';
import NavLink from './NavLink/NavLink';

function NavBar ({isLoggedIn}) {

    const path = usePath();

    let links = (
        <React.Fragment>
            <NavLink href="/auth" className={path === '/auth' ? 'active' : ''}>Auth</NavLink>
            <NavLink href="/" className={path === '/' ? 'active' : ''}>Products</NavLink>
        </React.Fragment>
    );

    if (isLoggedIn) {
        links = (
            <React.Fragment>
                <NavLink href="/logout">Log Out</NavLink>
                <NavLink href="/" className={path === '/' ? 'active' : ''}>Products</NavLink>
            </React.Fragment>
        )
    }

    return (
        <StyledNavBar>
            { links }
        </StyledNavBar>
    )
};

export default NavBar;