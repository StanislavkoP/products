import React from 'react';
import { navigate } from 'hookrouter';
import AuthForm from './AuthForm/AuthForm';
import Api from '../../Share/Api';
import { setItemToLocalStorage } from '../../Share/LocalStorage';
import { StateContext } from '../../state/StateContext';

class Auth extends React.Component {

    state = {
        errorMessage: null,
        sendFormLoading: false,
    }

    static contextType = StateContext

    
    onSendAuthForm = (userData, typeAuth) => {
        const [, dispatch] = this.context;


        this.setState({ sendFormLoading: true } , () => {
            sendForm.call(this);
        });

        function sendForm() {
            Api.authApi.onAuth({
                username: userData.name,
                password: userData.password
            
            }, typeAuth)
            .then(response => {
                if (response.success) {
                    this.setState({
                        sendFormLoading: false
                    
                    }, () => {
                        setItemToLocalStorage('token', response.token);
                        setItemToLocalStorage('userName', userData.name);

                        dispatch({
                            type: 'AUTH_USER_SUCCESS',
                            isLoggedIn: true,
                            userName: userData.name
                        });

                        navigate('/', true);
                    })
                    
                } else {
                    this.setState({
                        errorMessage: response.message,
                        sendFormLoading: false
                    })

                    throw Error(response.message);
                }
            })
            .catch(error => {
                console.log(error);
            })
    
        }
    }

    render () {
        const {
            errorMessage
            
        } = this.state;
        const [{ isLoggedIn }] = this.context;

        return (
            <React.Fragment>
                {
                    isLoggedIn && <p>'log in'</p>
                }
            
            <AuthForm
                onSendForm={this.onSendAuthForm}
                errorMessage={ errorMessage }
            />
            </React.Fragment>
        )
    }
};


export default Auth;