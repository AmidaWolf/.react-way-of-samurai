import {connect} from "react-redux";

import {
    followActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redux/users-reducer";

import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items, 1);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }

    render() {
        return (
            <Users
                users={this.props.users}
                setUsers={this.props.setUsers}
                setTotalUsersCount={this.props.setTotalUsersCount}
                page={this.props.page}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.followUser}
                unfollow={this.props.unFollowUser}
            />
        )
    }
}

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

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

