import React from 'react'
import { baseURL } from '../../../Share/Api';

import ControlsCreateReview from '../ControlsCreateReview/ControlsCreateReview';
import ReviewList from '../../Review/ReviewList/ReviewList';
import { DotsSpinner } from '../../Spinners/Spinners';
import { ProductWrapper, ProductImgWrapper, ProductTitle, ProductColumnLeft, ProductColumnRight, ProductColumnLeftContent, ErrorMessage } from './ProductItemFullStyles';

function ProductItemFull(props) {
    const {
        isLoggedIn,
        productInformation,
        productReviews,
        isLoadingProductReviews,
        createReviewControlsConfig,
        newReviewError

    } = props;

    let reviewListContent = <DotsSpinner/>

    if (!isLoadingProductReviews) {
        reviewListContent = (
            <React.Fragment>
                {
                    productReviews ? <ReviewList reviewList={ productReviews } /> : <p>No reviews</p>
                }
            </React.Fragment>
        )
    }

    return (
        <ProductWrapper>             
            <ProductColumnLeft>
                <ProductColumnLeftContent>
                    <ProductImgWrapper>
                        <img src={`${baseURL}/static/${productInformation.img}`} alt={productInformation.title}/>
                    </ProductImgWrapper>
                    <ProductTitle>{ productInformation.title }</ProductTitle>
                    {
                        isLoggedIn
                        &&
                        <React.Fragment>
                            {
                                newReviewError ? <ErrorMessage> { newReviewError } </ErrorMessage>: null
                            }
                            <ControlsCreateReview 
                                {...createReviewControlsConfig}
                            />
                        </React.Fragment>

                    }
                </ProductColumnLeftContent>
            </ProductColumnLeft>

            <ProductColumnRight>
                { reviewListContent }
            </ProductColumnRight>
    </ProductWrapper>
)
}

export default ProductItemFull
