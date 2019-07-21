import { A } from 'hookrouter';
import styled from 'styled-components';

export const StyledNavLink = styled(A)`
    position: relative;
    display: inline-block;
    padding: 12px;
    outline: none;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    text-shadow: 0 0 1px rgba(255,255,255,0.3);

    &::before {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background: black;
        content: '';
        opacity: 0;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        transform: translateY(-10px);

    }
    
    &:hover {
        &::before {
            height: 3px;
            opacity: 1;
            transform: translateY(0px);
            
        }
    }

    &.active {
        cursor: default;
        &::before {
            height: 3px;
            opacity: 1;
            transform: translateY(0px);
            
        }
    }
`;