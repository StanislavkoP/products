import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display: flex;
    border-top: 1px solid black;
    
    @media only screen and (max-width: 520px) {
        display: block;

    }


    `;

export const ProductColumnLeft = styled.div`
    position: relative;
    width: 40%;
    border-right: 1px solid black;

    @media only screen and (max-width: 520px) {
        width: 100%;
        border-right: none;

    }

`;

export const ProductColumnRight = styled.div`
    width: 60%;

    @media only screen and (max-width: 520px) {
        width: 100%;
    }
`;

export const ProductColumnLeftContent = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;



`;

export const ProductImgWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    margin: 0 auto;

    & img {
        display: block;
        width: 100%;
    }
`;

export const ProductTitle = styled.p`
`;

export const ErrorMessage = styled.div`
    color: red;
`;