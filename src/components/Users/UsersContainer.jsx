import {connect} from "react-redux";

import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users, page) => {
            dispatch(setUsersActionCreator(users, page));
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;
