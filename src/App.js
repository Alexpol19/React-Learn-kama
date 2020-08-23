import React from 'react';
import { Route} from "react-router-dom";
import './common.css';
import style from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {

    return(
        <div className={style.appWrapper}>
            <Header />
            <main className="container">
                <NavBar navBarData={props.state.navBar} />
                <div className={style.content}>
                    <Route exact path="/profile" render={ () => 
                        <Profile 
                            profile={props.state.profile} 
                            addPost={props.store.addPost.bind(props.store)}
                            onInputPostText={props.store.onInputPostText.bind(props.store)} />}/>
                    <Route 
                        path="/dialogs" render={ () => 
                            <Dialogs 
                                dialogs={props.state.chat.dialogsData}
                                addMessage={props.store.addMessage.bind(props.store)}
                                onChangeMessageText={props.store.onChangeMessageText.bind(props.store)} /> }  />
                </div>
                
            </main>
            
        </div>
    );
}



export default App;
