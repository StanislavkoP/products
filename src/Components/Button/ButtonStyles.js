import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: var(--blue-color);
    border: none;
    color: white;
    padding: 8px 23px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em black;
        transform: translateY(-0.25em);
    }
`;