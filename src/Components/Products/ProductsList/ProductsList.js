import React from 'react';
import { StyledProductList } from './ProductListStyles';
import Product from '../ProductItem/ProductItem';

function ProductsList({ productList = [] }) {
    return (
        <StyledProductList>
            {
                productList.map(product => (
                    <Product 
                        key={product.id}
                        title={ product.title }
                        imgURL={ product.img }
                        productId={ product.id }
                    />
                ))
            }
        </StyledProductList>
    )
}

export default ProductsList;
