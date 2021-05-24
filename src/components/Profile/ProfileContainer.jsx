import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {
    changeAvatar,
    getUserInfo,
    getUserStatus,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getIdSelector,
    getIsUpdateSelector,
    getProfileSelector,
    getStatusSelector
} from "../../Redux/users-selector";


function ProfileContainer(props) {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = props.id;
    }

    useEffect(() =>{
        props.getUserInfo(userId);
        props.getUserStatus(userId);
    },[userId])

    return <Profile {...props} isOwner={!props.match.params.userId}/>
}

let mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    id: getIdSelector(state),
    isUpdate: getIsUpdateSelector(state)
})

export default compose(
    connect(
        mapStateToProps,
        {getUserInfo, getUserStatus, updateUserStatus, changeAvatar}
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
