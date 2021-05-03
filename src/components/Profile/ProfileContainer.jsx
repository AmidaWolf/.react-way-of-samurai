import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {getUserInfo, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserInfo(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <>
                <Profile {...this.props}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
})


export default compose(
    connect(
        mapStateToProps,
        {getUserInfo, getUserStatus, updateUserStatus}
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

