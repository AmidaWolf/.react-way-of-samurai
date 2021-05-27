import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Profile from "./Profile";
import {
    changeAvatar,
    getUserInfo,
    getUserStatus,
    saveProfile,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getErrorInfoSelector,
    getIdSelector, getIsErrorSelector,
    getIsUpdateSelector,
    getProfileSelector,
    getStatusSelector
} from "../../Redux/users-selector";


const ProfileContainer = (props) => {
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
    isUpdate: getIsUpdateSelector(state),
    isError: getIsErrorSelector(state),
    errorInfo: getErrorInfoSelector(state)
})

export default compose(
    connect(
        mapStateToProps,
        {getUserInfo, getUserStatus, updateUserStatus, changeAvatar, saveProfile}
    ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
