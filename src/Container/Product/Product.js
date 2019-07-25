import React, { Component } from 'react';
import { StateContext } from '../../state/StateContext';
import Api from '../../Share/Api';

import ReviewItemFull from '../../Components/Products/ProductItemFull/ProductItemFull';
import Spinner from '../../Components/Spinner/Spinner';


export class Product extends Component {

    state = {
        productInformation: null,
        productReviews: [],
        newReviewInform: {
            rate: 0,
            text: ''
        },
        newReviewError: null,
        isHoveredRateValue: 0,
        isRatingClicked: false,
        isLoadingProductInformation: true,
        isLoadingProductReviews: true,
        isLoadingCreateReview: false,
    }

    static contextType = StateContext;

    componentDidMount() {
        const { productId } = this.props;
        const [{productList, productReviewList}, dispatch] = this.context;

        if (productReviewList.has(productId)) {
            const productReviews = productReviewList.get(parseFloat(productId))
            this.setState({productReviews, isLoadingProductReviews: false});

            return;
        }

        if (productList.has(productId)) {
            const productInformation = productList.get(parseFloat(productId))
            this.setState({productInformation, isLoadingProductInformation: false});

            return;
        }

        Api.productsApi.getProducts()
            .then(response => {
                const productList = response;
                const newProductList = new Map();

                productList.forEach(product => {
                    newProductList.set(product.id, product)
                });

                this.setState({productInformation: newProductList.get(parseFloat(productId)), isLoadingProductInformation: false})
                
                dispatch({
                    type: 'GET_PRODUCT_LIST_SUCCESS', productList: newProductList
                });
            })

        Api.productsApi.getProductReviews(productId)
            .then(response => {
                const productReviews = response;

                const newProductReviews = new Map();
                newProductReviews.set(parseFloat(productId), productReviews)

                this.setState({productReviews, isLoadingProductReviews: false})

                dispatch({
                    type: 'GET_PRODUCT_REVIEW',
                    reviews: newProductReviews
                });
            })
    };

    onChangeNewReview = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if(inputName ===  'text' && inputValue.trim().length > 3000) return;

        this.setState({
            newReviewInform: {
                ...this.state.newReviewInform,
                [inputName]: inputValue
            },
            newReviewError: null
        })
    };

    onRatingClick = rateValue => {
        this.setState({
            isRatingClicked: true,
            newReviewInform: {
                ...this.state.newReviewInform,
                rate: rateValue
            }
        })
    };

    onRatingHover = (value) => this.setState({ isHoveredRateValue: value })

    onRatingHoverOut = () => {
        const newRateValue = this.state.isRatingClicked ? this.state.newReviewInform.rate : 0;
        this.setState({
            isHoveredRateValue: newRateValue
        })
    };

    onSendReview = () => {
        const { productId } = this.props;
        const { newReviewInform } = this.state;

        if (newReviewInform.text.trim().length === 0) {
            this.setState({newReviewError: 'Please, text the review message'});

            return;
        }

        this.setState({
            isLoadingCreateReview: true
        });

        Api.productsApi.sendNewReview(productId, newReviewInform)
            .then(response => {
                const [{ productReviewList, userName }, dispatch] = this.context;

                const reviewListCurrentProduct = productReviewList.get(parseInt(productId));
                const reviewListLength = reviewListCurrentProduct.length;
                const lastReview = reviewListCurrentProduct[reviewListLength - 1];
                const lastReviewId = lastReview.id;
                
                const newReview = {};
                newReview.id = lastReviewId + 1;
                newReview.username = userName;
                newReview.rate = newReviewInform.rate;
                newReview.text = newReviewInform.text;
                newReview.created_at = new Date();
            
                dispatch({
                    type: 'ADD_NEW_REVIEW',
                    productId: parseInt(productId),
                    review: newReview

                });

                this.setState({
                    productReviews: [
                        newReview,
                        ...this.state.productReviews
                    ],
                    newReviewInform: {
                        rate: 0,
                        text: ''
                    },
                    isHoveredRateValue: 0,
                    isRatingClicked: false,
                    isLoadingCreateReview: false,
                });
            })
            .catch(error => {
                console.log(error.response);
                this.setState({newReviewError: error.response});
            })
    };
    
    render() {
        const [{ isLoggedIn }] = this.context;
        const { 
            productInformation,
            productReviews,
            isLoadingProductInformation,
            isLoadingProductReviews,
            newReviewError,
            newReviewInform,
            isLoadingCreateReview,
            isHoveredRateValue

        } = this.state;

        let productContent = <Spinner/>;

        if (!isLoadingProductInformation) {
            productContent = (
                <ReviewItemFull 
                    isLoggedIn={ isLoggedIn }
                    productInformation={ productInformation }
                    productReviews={ productReviews }
                    isLoadingProductReviews={ isLoadingProductReviews }
                    newReviewError={ newReviewError }
                    
                    createReviewControlsConfig= {{
                        ratingValue: isHoveredRateValue,
                        reviewText: newReviewInform.text,
                        onChangeTextReview: this.onChangeNewReview,
                        onRatingClick: this.onRatingClick,
                        onRatingHover: this.onRatingHover,
                        onRatingHoverOut: this.onRatingHoverOut,
                        onSendReview: this.onSendReview,
                        isLoadingCreateReview: isLoadingCreateReview


                    }}
                /> 
            )
        };

        return productContent
    }
}

export default Product;
