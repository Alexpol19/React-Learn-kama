import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormControls';
import style from './ProfileInfo.module.css';

const ProfileDetails = (props) => {
    return(
        <div className={style.detailsEdit}>
            <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    name="fullName" 
                    placeholder="Enter Full Name" 
                    component={Input}
                    validate={[requiredField]}
                    label="Full Name"
                    type="text" />
            </div>
            <div>
                <Field 
                    name="aboutMe" 
                    placeholder="About Me" 
                    component={Textarea}
                    validate={[requiredField]}
                    label="About Me"
                    type="text" />
            </div>
            <div>
                <Field 
                        name="lookingForAJob" 
                        id="lookingForAJob" 
                        label="Looking for a Job"
                        component={Input}
                        type="checkbox" /> 
            </div>
            <div>
                <Field 
                    name="lookingForAJobDescription" 
                    placeholder="JobDescription" 
                    component={Textarea}
                    validate={[requiredField]}
                    label="JobDescription"
                    type="text" />
            </div>
            <p className={style.socialsTitle}>Socials:</p>
            {Object.keys(props.details.contacts).map( key => {
                return ( 
                    <Field 
                        key={key}
                        name={'contacts.'+key} 
                        placeholder={key} 
                        component={Input}
                        label={key}
                        type="text" />
                )
            })}
            {props.error ? <div className={style.commonError}>{props.error}</div> : <></>}
            <button>Save</button>
        </form>
        </div>
    );
}
let ProfileDetailsEdit = reduxForm({
    form: 'profileDetails'
})(ProfileDetails);

export default ProfileDetailsEdit;