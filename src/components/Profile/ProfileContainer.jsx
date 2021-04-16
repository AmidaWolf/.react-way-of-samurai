import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {setIsFetching, setUserProfile} from "../../Redux/profile-reducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId;
        if (this.props.match.params.userId === undefined) {
            userId = 16379;
        } else {
            userId = this.props.match.params.userId;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let URLProfileContainer = withRouter(ProfileContainer);

export default connect(
    mapStateToProps,
    {setUserProfile, setIsFetching}
    )(URLProfileContainer);
