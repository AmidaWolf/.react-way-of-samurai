import React from 'react';
import * as axios from "axios";

import Auth from "./Auth";
import {connect} from "react-redux";
import {setUserData, setUserPhoto} from "../../Redux/auth-reducer";


class AuthContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(response => {
                            this.props.setUserPhoto(response.data.photos.small);
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

