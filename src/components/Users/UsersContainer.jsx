import {connect} from "react-redux";

import Users from "./Users";
import {
    followActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount
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
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountActionCreator(count));
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;
