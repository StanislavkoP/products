import styled from 'styled-components';

export const StyledSimpleSpinner = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);

  
    & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1em;
    height: 1em;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;