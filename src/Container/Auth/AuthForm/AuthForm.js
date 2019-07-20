import React, { useState } from 'react';
import { StyledAuthForm, ErrorMessage} from './AuthFormStyles';
import InputGroup from '../../../Components/Form/InputGroup/InputGroup'; 
import TextInput from '../../../Components/Form/InputText/InputText';
import Button from '../../../Components/Button/Button';

function AuthForm ({onSendForm, errorMessage}) {
    const [userData, setUserData] = useState({name: '', password: ''});
    const [typeAuth, setTypeAuth] = useState('logIn');

    function onChangeInput (e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setUserData({
            ...userData,
            [inputName]: inputValue
        });

    };

    function onChangeTypeAuth (e) {
        const inputValue = e.target.value;

        setTypeAuth(inputValue);
    };


    return (
        <div>
            <div>
                <label>
                    <input type="radio" onChange={onChangeTypeAuth} checked={typeAuth === 'signIn'} name="typeAuth" value="signIn"/>
                    <div>SignIn</div>
                </label>
                <label>
                    <input type="radio" onChange={onChangeTypeAuth} checked={typeAuth === 'logIn'} name="typeAuth" value="logIn"/>
                    <div>LogIn</div>
                </label>

            </div>
            <StyledAuthForm>
                {
                    errorMessage && <ErrorMessage>{ errorMessage }</ErrorMessage>
                }
                <InputGroup labelText="Name">
                    <TextInput name="name" onChange={ onChangeInput }/>
                </InputGroup>

                <InputGroup labelText="Password" >
                    <TextInput name="password" onChange={ onChangeInput }/>
                </InputGroup>

                <Button type="button" onClick={() => onSendForm(userData, typeAuth)}>Send</Button>
            </StyledAuthForm>
        </div>
    )
};

export default AuthForm;