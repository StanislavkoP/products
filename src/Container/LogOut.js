import { useEffect } from 'react';
import { navigate } from 'hookrouter';
import { removeItemFromLocalStorage } from '../Share/LocalStorage';
import { useStateValue } from '../state/StateContext';

function LogOut() {
    const [, dispatch] = useStateValue();
    
    useEffect(() => {
        removeItemFromLocalStorage('token');
        removeItemFromLocalStorage('userName');
        dispatch({type: 'USER_LOG_OUT'});
        navigate('/auth', true);

    }, [dispatch])

    return null
}

export default LogOut;
