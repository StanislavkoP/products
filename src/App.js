import React, { useEffect } from 'react';
import { useRoutes, navigate } from 'hookrouter';
import { useStateValue } from './state/StateContext';
import { getItemFromLocalStorage } from './Share/LocalStorage';
import * as actionTypes from './state/actionTypes';

import PrivateRouter from './Container/PrivateRoute';
import Header from './Components/Header/Header';
import AuthPage from './Container/Auth/Auth';
import LogOutPage from './Container/LogOut';
import DashboardPage from './Container/Dashboard';
import ProductPage from './Container/Product/Product';

const routes = {
  '/': () =>  () => <DashboardPage/>,
  '/auth': () =>  () => <AuthPage/>,
  '/logout': () => isLoggedIn => (
    <PrivateRouter isLoggedIn={isLoggedIn}>
      <LogOutPage /> 
    </PrivateRouter>
  ) ,
  '/product/:id': ({id}) => () =>  <ProductPage productId={id} />,
};

function App() {
  const routeResult = useRoutes(routes);
  const [{isLoggedIn}, dispatch] = useStateValue();

  useEffect(() => {
    if (getItemFromLocalStorage('token')) {
      const userName = getItemFromLocalStorage('userName');

      dispatch({
          type: actionTypes.AUTH_USER,
          isLoggedIn: true,
          userName
      });

      setTimeout(() => {
        dispatch({type: actionTypes.USER_LOG_OUT});
        navigate('/logout', true);
        
      }, 120 * 60 * 1000)

    }

  }, [dispatch])

  return (
      <div className="App">
        <Header/>
        
        { routeResult(isLoggedIn) }
      </div>
  );
}

export default App;