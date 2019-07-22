import React from 'react';
import { baseURL } from '../../../Share/Api';

import { StyledProductItem, ProductItemImg, ProductItemTitle, ProductItemContent, ProductItemLink } from './ProductItemStyles';

function ProductItem({ productId, title, imgURL }) {
    return (
        <StyledProductItem>
            <ProductItemContent>
                <ProductItemImg src={ `${baseURL}/static/${ imgURL }` } alt={ title }/>

                <ProductItemTitle>{ title }</ProductItemTitle>
            </ProductItemContent>

            <ProductItemLink href={`product/${ productId }`}>Review</ProductItemLink>
        </StyledProductItem>    
    )
}

export default ProductItem;
