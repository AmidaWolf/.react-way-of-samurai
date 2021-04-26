import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {getUserInfo} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


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


export default compose(
    connect(
        mapStateToProps,
        {getUserInfo}
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

