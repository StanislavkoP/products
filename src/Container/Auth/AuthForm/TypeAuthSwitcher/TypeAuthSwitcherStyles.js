import styled from 'styled-components';

export const SwitcherItemText = styled.div`
    padding: 6px 12px;
    border: 1px solid black;

`;

export const SwitcherItem = styled.label`
    display: inline-block;
    cursor: pointer;

    & input {
        display: none;
    }

    & input:checked ~ ${SwitcherItemText} {
            color: white;
            background-color: var(--blue-color);
            border-color: transparent;
        }
    }
`;

export const WrapperControls = styled.div`
    display: flex;
    margin-bottom: 12px;
`;