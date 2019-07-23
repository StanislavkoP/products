import React from 'react';
import { ReviewItemWrapper, ReviewItemTextReview, ReviewItemCreatedByWrapper, ReviewItemInputGroup, ReviewItemInputGroupText, ReviewItemInputGroupReviewText, StyledStarRatingPanel } from './ReviewItemStyles';


function ReviewItem(props) {
    const {
        createdBy,
        createdAt,
        reviewText,
        starRatingPanelConfig

    } = props;

    return (
        <ReviewItemWrapper>
            {
                createdBy
                &&
                <ReviewItemCreatedByWrapper>
                    <ReviewItemInputGroup
                        labelText="User name:"
                    >
                        <ReviewItemInputGroupText>
                            { createdBy.username || '—' }
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>

                    <ReviewItemInputGroup
                        labelText="First name:"
                    >
                        <ReviewItemInputGroupText>
                            { createdBy.first_name || '—' }
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>
                    
                    <ReviewItemInputGroup
                        labelText="Last name:"
                    >
                        <ReviewItemInputGroupText>
                            { createdBy.last_name || '—' }
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>

                    <ReviewItemInputGroup
                        labelText="Email:"
                    >
                        <ReviewItemInputGroupText>
                            { createdBy.email || '—' }
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>

                    <ReviewItemInputGroup
                        labelText="Rate:"
                    >
                        <ReviewItemInputGroupText>
                            <StyledStarRatingPanel { ...starRatingPanelConfig } />
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>

                    <ReviewItemInputGroup
                        labelText="Created at:"
                    >
                        <ReviewItemInputGroupText>
                            { createdAt }
                        </ReviewItemInputGroupText>
                    </ReviewItemInputGroup>
                </ReviewItemCreatedByWrapper>
            }
            <ReviewItemInputGroupReviewText
                labelText="Review text:"
            >
                <ReviewItemTextReview>
                    { reviewText }
                </ReviewItemTextReview>
            </ReviewItemInputGroupReviewText>

        </ReviewItemWrapper>
    )
}

export default ReviewItem;
