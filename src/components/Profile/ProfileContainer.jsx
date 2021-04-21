import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {setIsFetching, setUserProfile} from "../../Redux/profile-reducer";
import {getUser} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId;
        if (this.props.match.params.userId === undefined) {
            userId = 16379;
        } else {
            userId = this.props.match.params.userId;
        }
            getUser(userId).then(response => {
                this.props.setUserProfile(response);
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
