import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem';
import { StyledReviewList } from './ReviewListStyles';

function ReviewList({ reviewList = [] }) {
    return (
        <StyledReviewList>
            {
                reviewList.map(review => (
                    <ReviewItem 
                        key={ review.id }
                        reviewId={ review.id.toString() }
                        createdBy={ review.created_by }
                        reviewText={ review.text }
                        createdAt={ new Date(review.created_at).toLocaleDateString() }
                        
                        starRatingPanelConfig = {{
                            name: review.id.toString(),
                            starCount: 5 ,
                            value: review.rate, 
                            editing: false,
                        }}
                    />
                ))
            }
        </StyledReviewList>
    )
}

export default ReviewList;
