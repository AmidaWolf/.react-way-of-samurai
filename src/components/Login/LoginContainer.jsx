import React from 'react';
import {connect} from "react-redux";

import {Login} from "./Login";
import {setUserLogin} from "../../Redux/auth-reducer";


class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    errorLogin: state.auth.errorLogin,
})

export default connect(mapStateToProps, {setUserLogin}
)(LoginContainer);

