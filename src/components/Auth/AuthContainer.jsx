import React from 'react';
import {connect} from "react-redux";

import Auth from "./Auth";
import {setUserData, setUserPhoto} from "../../Redux/auth-reducer";
import {authMe, getUser} from "../../api/api";


class AuthContainer extends React.Component {
    componentDidMount() {
            authMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setUserData(id, email, login);
                   getUser(id).then(response => {
                            this.props.setUserPhoto(response.photos.small);
                        })
                }
            })
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
    {setUserData, setUserPhoto}
)(AuthContainer);

