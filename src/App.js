import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {connect} from "react-redux";

import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {withSuspense} from "./components/hoc/WithSuspense";

const Messages = React.lazy(() => import('./components/Messages/Messages'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            !this.props.initialized ?
            <Preloader /> :
            <HashRouter>
                <div className={'wrapper'}>
                    <Header/>

                    <Navigation/>

                    <div className={'content-wrapper'}>
                        <Route path="/profile/:userId?"
                               render={withSuspense(ProfileContainer)}
                        />
                        <Route path="/messages"
                               render={withSuspense(Messages)}
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
                               render={withSuspense(UsersContainer)}
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
            </HashRouter>

        );
    }
}

let mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

