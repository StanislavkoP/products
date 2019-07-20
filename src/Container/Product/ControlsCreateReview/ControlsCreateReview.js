import React from 'react';
import Form from '../../../Components/Form/Form'
import InputGroup from '../../../Components/Form/InputGroup/InputGroup'
import TextArea from '../../../Components/Form/TextArea/TextArea';
import Button from '../../../Components/Button/Button';

function ControlsCreateReview(props) {

    const {
        onChangeTextReview,
        onSendReview

    } = props;

    return (
        <Form>
            <InputGroup>
            <TextArea onChange={onChangeTextReview} name="rate"/>
            </InputGroup>
            <InputGroup>
                <TextArea onChange={onChangeTextReview} name="text"/>
            </InputGroup>

            <Button type="button" onClick={onSendReview}>Send</Button>
        </Form>
    )
}

export default ControlsCreateReview;
