import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {getUserInfo} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.userId);
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
    profile: state.profilePage.profile,
})

let URLProfileContainer = withRouter(ProfileContainer);

export default connect(
    mapStateToProps,
    {getUserInfo}
    )(withAuthRedirect(URLProfileContainer));
