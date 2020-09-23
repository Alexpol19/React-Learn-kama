
import React, { Suspense } from 'react';
import { Route, withRouter, BrowserRouter, Redirect} from "react-router-dom";
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
import Switch from 'react-bootstrap/esm/Switch';
import Page404 from './components/Page404/Page404';
const UsersContainer = React.lazy(() => import('./components/pages/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
// import Dialogs from './components/Dialogs/Dialogs';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    // catchAllUnhandledErrors = (error) => {
    //     console.log(error)
    //     console.log(error.reason)
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    // }
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
                        <Switch>
                            <Route exact path="/" render={ () => <Redirect to="/profile" />} />
                            <Route path="/profile/:userId?" render={ () => 
                                <ProfileContainer />}
                            />
                            <Route path="/dialogs" render={ () => 
                                    <Suspense fallback={<Loader 
                                        type="ThreeDots"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={0} />}>
                                        <Dialogs />
                                    </Suspense> }  />
                            <Route path="/users" render={ withSuspense(UsersContainer) }  />
                            <Route path="/login" render={ () => 
                                <LoginContainer />
                                }/>
                            {/* <Route path='/404' exact component={Page404} /> */}
                            {/* <Redirect to='/404' /> */}
                        </Switch>
                    </div>
                </main>
                {this.props.errorAsync ? <div className={style.errorModal}><h5>{this.props.errorAsync}</h5></div> : <></>}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        errorAsync: state.app.errorAsync
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
        // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;