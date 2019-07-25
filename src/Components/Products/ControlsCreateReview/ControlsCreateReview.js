import React from 'react';
import Button from '../../Button/Button';
import { CreateReviewForm, CreateReviewTextArea, CreateReviewInputGroup, StarRatingPanel } from './ControlsCreateReviewStyles';

function ControlsCreateReview(props) {

    const {
        ratingValue,
        reviewText,
        onChangeTextReview,
        onRatingClick,
        onRatingHover,
        onRatingHoverOut,
        onSendReview

    } = props;

    return (
        <CreateReviewForm>
            <CreateReviewInputGroup
                labelText="Leave your rate"
            >
                <StarRatingPanel 
                    name="product-rate" 
                    starCount={ 5 }
                    value={ ratingValue }
                    onStarClick={ onRatingClick }
                    onStarHover={ onRatingHover }
                    onStarHoverOut={ onRatingHoverOut }
                />
            </CreateReviewInputGroup>

            <CreateReviewInputGroup
                labelText="Text your message"
            >
                <CreateReviewTextArea name="text" onChange={onChangeTextReview} value={ reviewText }/>
            </CreateReviewInputGroup>

            <Button type="button" onClick={onSendReview}>Send</Button>
        </CreateReviewForm>
    )
}

export default ControlsCreateReview;