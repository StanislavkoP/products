import styled from 'styled-components';
import Form from '../../Form/Form';
import TextArea from '../../Form/TextArea/TextArea';
import InputGroup from '../../Form/InputGroup/InputGroup';
import StarRatingPanelBase from '../../Form/StarRating/StarRating';


export const CreateReviewForm = styled(Form)`
    border: none;
`;

export const CreateReviewTextArea = styled(TextArea)`
    height: 200px;
    width: 100%;
`;

export const CreateReviewInputGroup = styled(InputGroup)`
    width: 100%;
    margin-bottom: 12px;
`;

export const StarRatingPanel = styled(StarRatingPanelBase)`
    margin-top: -6px;
`;