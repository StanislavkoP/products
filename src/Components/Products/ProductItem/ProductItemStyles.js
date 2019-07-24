import styled from 'styled-components';
import { A } from 'hookrouter';

export const ProductItemImg = styled.img`
    height: 200px;
    transition: transform 0.5s ease;
`;

export const StyledProductItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 230px;
    padding: 0 12px;
    margin-bottom: 16px;
    margin-right: 16px;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        ${ProductItemImg} {
            transform: scale(1.1)
        }
    }

    @media only screen and (max-width: 560px) {
        margin-right: 0;

    }

`;

export const ProductItemContent = styled.div`
    width: 100%;
    padding: 10.5px;
    border: 1px solid black;
    border-bottom: none;
    overflow: hidden;
`;

export const ProductItemTitle = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const ProductItemLink = styled(A)`
    width: 100%;
    padding: 6px 12px;
    color: white;
    text-decoration: none;
    background-color: var(--blue-color);
    transition: opacity 0.5s ease;
    
    &:hover {
        opacity: 0.8;
    }
`;