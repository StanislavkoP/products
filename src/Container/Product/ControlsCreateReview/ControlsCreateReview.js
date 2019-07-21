import React from 'react';
import Form from '../../../Components/Form/Form'
import InputGroup from '../../../Components/Form/InputGroup/InputGroup'
import TextArea from '../../../Components/Form/TextArea/TextArea';
import Button from '../../../Components/Button/Button';
import StarRatingPanel from '../../../Components/Form/StarRating/StarRating';

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
        <Form>
            <StarRatingPanel 
                name="product-rate" 
                starCount={ 5 }
                value={ ratingValue }
                onStarClick={ onRatingClick }
                onStarHover={ onRatingHover }
                onStarHoverOut={ onRatingHoverOut }
            />
            <InputGroup>
                <TextArea name="text" onChange={onChangeTextReview} value={ reviewText }/>
            </InputGroup>

            <Button type="button" onClick={onSendReview}>Send</Button>
        </Form>
    )
}

export default ControlsCreateReview;