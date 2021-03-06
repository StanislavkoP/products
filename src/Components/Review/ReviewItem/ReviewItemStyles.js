import styled from 'styled-components';
import StarRatingPanel from '../.././Form/StarRating/StarRating';
import InputGroup from '../../Form/InputGroup/InputGroup';

export const ReviewItemWrapper = styled.li`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: rgba(128,128,128, 0.15);
    border-radius: 20px;
    padding: 25px;
    padding-top: 12px;
    margin-bottom: 16px;
`;

export const ReviewItemTextReview = styled.p`
    margin: 0;
    text-align: left;
    word-break: break-all;
`;

export const StyledStarRatingPanel = styled(StarRatingPanel)`
    font-size: 18px;
    line-height: 1;
    height: 16px;
    overflow: hidden;
`;

export const ReviewItemCreatedByWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid black;
    width: 100%;
`;

export const ReviewItemInputGroup = styled(InputGroup)`
    flex-direction: row;
    align-items: center;
    font-weight: 300;
    margin-right: 30px;
    color: #5d5c5c;
    text-align: left;
    flex-wrap: wrap;

    & label {
        font-weight: 600;
        margin-bottom: 0;
    }
`;

export const ReviewItemInputGroupReviewText = styled(ReviewItemInputGroup)`
    width: 100%;    
    flex-direction: column;
    align-items: flex-start;
    margin-top: 12px;
`;

export const ReviewItemInputGroupText = styled.div`
    margin-left: 6px;
`;