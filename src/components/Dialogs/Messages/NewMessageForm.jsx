import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../../common/FormControls';
import { requiredField, minLength } from '../../../utils/validators/validators';

const minLength10 = minLength(10);

const NewMessage = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field 
                name="messageText" 
                placeholder="Message" 
                label="Enter message"
                component={Input} 
                validate={[requiredField, minLength10]}
                type='text' />
            <button>Send</button>
        </form>
    )
}

let NewMessageForm = reduxForm({
    form: 'message'
})(NewMessage)

export default NewMessageForm;
