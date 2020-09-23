import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../common/FormControls';
import { requiredField, minLength } from '../../utils/validators/validators';

const minLength6 = minLength(6);
const minLength10 = minLength(10);

const Login = ({handleSubmit, error, captcha}) => {
    return (
        <div className={style.loginPage}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.loginField}>
                    <Field 
                        name="email" 
                        placeholder="Login" 
                        component={Input}
                        validate={[requiredField, minLength10]} 
                        label="Email"
                        type="email" />
                </div>
                <div className={style.loginField}>
                    <Field 
                        name="password" 
                        placeholder="Password" 
                        component={Input}
                        validate={[requiredField, minLength6]} 
                        label="Password"
                        type="text" />
                </div>
                <div className={style.checkbox}>
                    <Field 
                        name="remember" 
                        id="rememberMe" 
                        label="Remember me"
                        component={Input}
                        type="checkbox" /> 
                </div>
                
                {captcha 
                    ?   <div>
                            <img src={captcha} alt=""/>
                            <Field 
                                name="captcha" 
                                placeholder="Captcha" 
                                component={Input}
                                validate={[requiredField]} 
                                label="Captcha"
                                type="text" />
                        </div>
                    :   <></>}
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