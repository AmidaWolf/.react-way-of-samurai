import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";

import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            !this.props.initialized ?
            <Preloader /> :
            <BrowserRouter>
                <div className={'wrapper'}>
                    <Header/>

                    <Navigation/>

                    <div className={'content-wrapper'}>
                        <Route path="/profile/:userId?"
                               render={() =>
                                   <ProfileContainer/>}
                        />
                        <Route path="/messages"
                               render={() =>
                                   <Messages/>}
                        />
                        <Route path="/news"
                               render={() =>
                                   <News/>}
                        />
                        <Route path="/music"
                               render={() =>
                                   <Music/>}
                        />
                        <Route path="/users"
                               render={() =>
                                   <UsersContainer/>}
                        />
                        <Route path="/settings"
                               render={() =>
                                   <Settings/>}
                        />
                        <Route path="/login"
                               render={() =>
                                   <LoginContainer/>}
                        />
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

let mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

