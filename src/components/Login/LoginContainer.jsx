import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './Login';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';


class LoginContainer extends React.Component {
    onSubmit = (data) => {
        this.props.login(data)
    }
    render() {
        {
            if(this.props.isAuth){
                return <Redirect to="/profile" />
            }
            else{
                return (
                    <LoginForm captcha={this.props.captcha} onSubmit={this.onSubmit} />
                )
            }
        }
        
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export default connect(mapStateToProps, {
    login
})(LoginContainer);