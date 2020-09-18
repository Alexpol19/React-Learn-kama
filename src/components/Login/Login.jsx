import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../common/FormControls';
import { requiredField, minLength } from '../../utils/validators/validators';

const minLength6 = minLength(6);
const minLength10 = minLength(10);

const Login = ({handleSubmit, error}) => {
    return (
        <div className={style.loginPage}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field 
                        name="email" 
                        placeholder="Login" 
                        component={Input}
                        validate={[requiredField, minLength10]} 
                        label="Email"
                        type="email" />
                </div>
                <div>
                    <Field 
                        name="password" 
                        placeholder="Password" 
                        component={Input}
                        validate={[requiredField, minLength6]} 
                        label="Password"
                        type="text" />
                </div>
                <div>
                    <Field 
                        name="remember" 
                        id="rememberMe" 
                        label="Remember me"
                        component={Input}
                        type="checkbox" /> 
                </div>
                {error ? <div className={style.commonError}>{error}</div> : <></>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
let LoginForm = reduxForm({
    form: 'login',
})(Login);

export default LoginForm;