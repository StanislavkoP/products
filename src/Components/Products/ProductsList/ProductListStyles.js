import styled from 'styled-components';

export const StyledProductList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    @media only screen and (max-width: 560px) {
        margin-right: 0;
        flex-direction: column;
        align-items: center;
    }

`;