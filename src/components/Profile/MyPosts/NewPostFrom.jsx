import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { requiredField, minLength } from '../../../utils/validators/validators';
import { Input } from '../../common/FormControls';

const minLength7 = minLength(7);

const NewPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                name="postText" 
                placeholder="New post" 
                component={Input} 
                label="Enter Text"
                type="text" 
                validate={[requiredField, minLength7]}
            />
            <button>Add Post</button>
        </form>
    )
}


let NewPostForm = reduxForm({
    form: 'newPost'
})(NewPost);

export default NewPostForm;