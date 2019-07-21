import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './state/StateContext';
import { getItemFromLocalStorage } from './Share/LocalStorage';

const userToken = getItemFromLocalStorage('token');

const initialState = {
    isLoggedIn: userToken ? true : false,
    userName: '',
    productList: new Map(),
    productReviewList: new Map()
}
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_USER_SUCCESS':
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                userName: action.userName
            }

        case 'USER_LOG_OUT':
            return {
                ...state,
                isLoggedIn: false
            }
        
        case 'GET_PRODUCT_LIST_SUCCESS':
            return {
                ...state,
                productList: action.productList
            }

        case 'GET_PRODUCT_REVIEW':
            return {
                ...state,
                productReviewList: action.reviews
            }

        case 'ADD_NEW_REVIEW':
            const reviewList = state.productReviewList.get(action.productId);
            const newReviewList = [...reviewList, action.review];

            return {
                ...state,
                productReviewList: state.productReviewList.set(action.productId, newReviewList)
            }

        default : return state;
    }
};

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
