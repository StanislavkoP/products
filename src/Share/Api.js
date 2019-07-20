import { getItemFromLocalStorage } from './LocalStorage';

export const baseURL = 'http://smktesting.herokuapp.com';

const authApi = {
    onSignIn: function (userData) {
        return fetch(`${baseURL}/api/register/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(data => data.json())

    },

    onLogIn: function (userData) {
        return fetch(`${baseURL}/api/login/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(data => data.json())

    },

    onAuth: function (userData, typeAuth) {
        if (typeAuth === 'signIn') {
            return this.onSignIn(userData)
        
        } else {
            return this.onLogIn(userData)

        }
    }
};

const productsApi = {
    getProducts: function () {
        return fetch(`${baseURL}/api/products/`)
            .then(data => data.json())
    },

    getProductReviews: function (productId) {
        return fetch(`${baseURL}/api/reviews/${productId}`)
            .then(data => data.json())
    },

    sendNewReview: function (productId, reviewData) {
        return fetch(`${baseURL}/api/reviews/${productId}`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${ getItemFromLocalStorage('token') }`
            },
            body: JSON.stringify(reviewData)
        })
        .then(data => data.json())

    }
}

export default {
    authApi,
    productsApi
}