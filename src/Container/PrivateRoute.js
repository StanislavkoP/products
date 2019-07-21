import { navigate } from 'hookrouter';

function PrivateRoute({ isLoggedIn, children }) {

    if (isLoggedIn) {
        return children;
    
    } else {
        navigate('/auth', true);
        return null;
    }
};

export default PrivateRoute;
