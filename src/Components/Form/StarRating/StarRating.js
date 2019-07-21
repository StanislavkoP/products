import React from 'react';
import { StyledStarRatingPanel } from './StarRatingStyles';


function StarRating(props) {
    return (
        <StyledStarRatingPanel { ...props } />    
    )
}

export default StarRating
