import React, { Component } from 'react';
import { baseURL } from '../../Share/Api';

import { StateContext } from '../../state/StateContext';
import Api from '../../Share/Api';

import ControlsCreateReview from './ControlsCreateReview/ControlsCreateReview';

export class Product extends Component {

    state = {
        productInformation: null,
        productReviews: [],
        newReviewInform: {
            rate: 0,
            text: ''
        }
    }

    static contextType = StateContext;

    componentDidMount() {
        const { productId } = this.props;
        const [{productList, productReviewList}, dispatch] = this.context;

        if (productReviewList.has(productId)) {
            const productReviews = productReviewList.get(parseFloat(productId))
            this.setState({productReviews});

            return;
        }

        if (productList.has(productId)) {
            const productInformation = productList.get(parseFloat(productId))
            this.setState({productInformation});

            return;
        }

        Api.productsApi.getProducts()
            .then(response => {
                const productList = response;
                const newProductList = new Map();

                productList.forEach(product => {
                    newProductList.set(product.id, product)
                });

                this.setState({productInformation: newProductList.get(parseFloat(productId))})
                
                dispatch({
                    type: 'GET_PRODUCT_LIST_SUCCESS', productList: newProductList
                });
            })

        Api.productsApi.getProductReviews(productId)
            .then(response => {
                const productReviews = response;

                const newProductReviews = new Map();
                productReviews.forEach(review => {
                    newProductReviews.set(review.product, review)
                });

                this.setState({productReviews})

                dispatch({
                    type: 'GET_PRODUCT_REVIEW_LIST_SUCCESS',
                    reviews: newProductReviews
                });
            })
    }

    onChangeNewReview = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({
            newReviewInform: {
                ...this.state.newReviewInform,
                [inputName]: inputValue
            }
        })
    }

    onSendReview = () => {
        const { productId } = this.props;
        const { newReviewInform } = this.state;

        Api.productsApi.sendNewReview(productId, newReviewInform)
            .then(response => {
                console.log(response);
            })
    }
    
    render() {
        const { productInformation, productReviews } = this.state;

        let productReviewsContent = null;
        if (productReviews) {
            productReviewsContent = productReviews.map(review => (
                <div key={review.id} style={{borderBottom: '1px solid black'}}>
                    {
                        review.created_by
                        &&
                        <div>
                            <div>{ review.created_by.first_name }</div>
                            <div>{ review.created_by.last_name }</div>
                            <div>{ review.created_by.email }</div>
                            <div>{ review.created_by.username }</div>
                        </div>
                    }
                    <p>
                        { review.text }
                    </p>
                    <p>
                        { review.rate }
                    </p>
                </div>
            ))
        }

        return (
            <React.Fragment>
                {
                    productInformation
                    &&
                    <React.Fragment>                   
                        <div>
                            <img src={`${baseURL}/static/${productInformation.img}`} alt={productInformation.title}/>
                            <p>{ productInformation.title }</p>
                            <ControlsCreateReview 
                                onChangeTextReview={this.onChangeNewReview}
                                onSendReview={this.onSendReview}
                            />

                            <div>
                                {
                                    productReviewsContent
                                }
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default Product;
