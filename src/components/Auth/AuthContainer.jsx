import React from 'react';
import {connect} from "react-redux";

import Auth from "./Auth";
import {getAuthUserData, setUserLogout} from "../../Redux/auth-reducer";


class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Auth {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoURL: state.auth.userPhoto
})

export default connect(
    mapStateToProps,
    {getAuthUserData, setUserLogout}
)(AuthContainer);

