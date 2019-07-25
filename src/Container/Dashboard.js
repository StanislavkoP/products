import React, { Component } from 'react';
import Api from '../Share/Api';
import { StateContext } from '../state/StateContext';
import * as actionTypes from '../state/actionTypes';

import ProductList from '../Components/Products/ProductsList/ProductsList';

export class Dashboard extends Component {

    static contextType = StateContext;
    
    componentDidMount() {
        const [, dispatch] = this.context;

        Api.productsApi.getProducts()
            .then(response => {
                const productList = response;
                const newProductList = new Map();

                productList.forEach(product => {
                    newProductList.set(product.id, product)
                });
                
                dispatch({
                    type: actionTypes.GET_PRODUCT_LIST,
                    productList: newProductList,
                });
            })
    }

    render() {
        const [{ productList }] = this.context;

        return (
            <ProductList productList={ [...productList.values()] } />
        )
    }
};

export default Dashboard;