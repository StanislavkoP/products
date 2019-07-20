import React, { Component } from 'react';
import { A } from 'hookrouter';
import Api, { baseURL } from '../Share/Api';
import { StateContext } from '../state/StateContext';

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
                    type: 'GET_PRODUCT_LIST_SUCCESS', productList: newProductList
                });
            })
    }

    render() {
        const [{ productList }] = this.context;

        return (
            <div>
                {
                    [...productList.values()].map(product => (
                        <div key={product.id}>
                            <img src={`${baseURL}/static/${product.img}`} alt={product.title}/>
                            <p>{ product.title }</p>
                            <A href={`product/${product.id}`}>Review</A>
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default Dashboard;
