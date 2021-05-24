import {connect} from "react-redux";
import React from "react";


import {
    getUsers,
    toggleFollowUser,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        let {users, getUsers} = this.props;
        if (users.length === 0) {
            getUsers(1);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users {...this.props}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    getUsers,
    toggleFollowUser
})(UsersContainer);

