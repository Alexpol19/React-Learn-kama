
import React, { Suspense } from 'react';
import { Route, withRouter, BrowserRouter} from "react-router-dom";
import './common.css';
import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';

import { initializeApp } from './redux/appReducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Loader from 'react-loader-spinner';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const UsersContainer = React.lazy(() => import('./components/pages/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
// import Dialogs from './components/Dialogs/Dialogs';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Loader 
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={0}
            />
        }
        return(
            <div className={style.appWrapper}>
                <HeaderContainer />
                <main className="container">
                    <NavBar />
                    <div className={style.content}>
                        <Route path="/profile/:userId?" render={ () => 
                            <ProfileContainer />}
                        />
                        <Route 
                            path="/dialogs" render={ () => 
                                <Suspense fallback={<Loader 
                                    type="ThreeDots"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                    timeout={0} />}>
                                    <Dialogs />
                                </Suspense> }  />
                        <Route 
                            path="/users" render={ withSuspense(UsersContainer) }  />
                        <Route path="/login" render={ () => 
                            <LoginContainer />
                             }/>
                    </div>
                </main>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp,
    })
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;