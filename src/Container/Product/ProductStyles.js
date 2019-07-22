import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display: flex;
    border-top: 1px solid black;
`;

export const ProductColumnLeft = styled.div`
    position: relative;
    width: 40%;
    border-right: 1px solid black;
`;

export const ProductColumnRight = styled.div`
    width: 60%
`;

export const ProductColumnLeftContent = styled.div`
    position: sticky;
    top: 0;
`;

export const ProductImgWrapper = styled.div`
    width: 100%;
    max-width: 350px;

    & img {
        display: block;
        width: 100%;
    }
`;