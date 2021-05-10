import React from 'react';
import {connect} from "react-redux";

import Auth from "./Auth";
import {setUserLogout} from "../../Redux/auth-reducer";


class AuthContainer extends React.Component {
    render() {
        return (
            <Auth {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoURL: state.auth.userPhoto,
})

export default connect(
    mapStateToProps,
    {setUserLogout}
)(AuthContainer);

