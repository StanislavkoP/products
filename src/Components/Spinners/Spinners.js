import React from 'react'
import { StyledDotsSpinner, StyledSimpleSpinner } from './SpinnersStyles';


function DotsSpinner() {
    return (
        <StyledDotsSpinner>Loading...</StyledDotsSpinner>    
    )
};

function SimpleSpinner() {
    return (
        <StyledSimpleSpinner><div></div><div></div><div></div><div></div></StyledSimpleSpinner>
    )
}

export  {
    DotsSpinner,
    SimpleSpinner
};