import React from 'react';
import { SwitcherItem, WrapperControls, SwitcherItemText } from './TypeAuthSwitcherStyles';

function TypeAuthSwitcher({ currentTypeAuth, onChangeTypeAuth }) {
    return (
        <WrapperControls>
            <SwitcherItem>
                <input type="radio" onChange={onChangeTypeAuth} checked={currentTypeAuth === 'signIn'} name="typeAuth" value="signIn"/>
                <SwitcherItemText>Sign In</SwitcherItemText>
            </SwitcherItem>
            
            <SwitcherItem>
                <input type="radio" onChange={onChangeTypeAuth} checked={currentTypeAuth === 'logIn'} name="typeAuth" value="logIn"/>
                <SwitcherItemText>Log In</SwitcherItemText>
            </SwitcherItem>
        </WrapperControls>
    )
}

export default TypeAuthSwitcher;