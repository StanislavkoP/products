import React, { useEffect } from 'react';
import { useRoutes, navigate } from 'hookrouter';
import { useStateValue } from './state/StateContext';
import { getItemFromLocalStorage } from './Share/LocalStorage';

import Header from './Components/Header/Header';
import AuthPage from './Container/Auth/Auth';
import LogOutPage from './Container/LogOut';
import DashboardPage from './Container/Dashboard';
import ProductPage from './Container/Product/Product';

import './App.css';


const routes = {
  '/': () => <DashboardPage/>,
  '/auth': () => <AuthPage/>,
  '/logout': () => <LogOutPage />,
  '/dashboard': () => <DashboardPage/>,
  '/product/:id': ({id}) => <ProductPage productId={id} />,
};

function App() {
  const routeResult = useRoutes(routes);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    if (getItemFromLocalStorage('token')) {
      const userName = getItemFromLocalStorage('userName');

      dispatch({
          type: 'AUTH_USER_SUCCESS',
          isLoggedIn: true,
          userName
      });

      setTimeout(() => {
        dispatch({type: 'USER_LOG_OUT'});
        navigate('/logout', true);
        
      }, 120 * 60 * 1000)

      navigate('/dashboard', true);

    }
  }, [dispatch])

  return (
      <div className="App">
        <Header/>

        { routeResult }
      </div>
  );
}

export default App;
