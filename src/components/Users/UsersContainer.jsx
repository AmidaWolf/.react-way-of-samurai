import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";

import {
    followActionCreator,
    setIsFetching,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "./Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true);
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items, 1);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setIsFetching(false);
                })
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={this.props.users}
                    setUsers={this.props.setUsers}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    page={this.props.page}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.followUser}
                    unfollow={this.props.unFollowUser}
                    setIsFetching={this.props.setIsFetching}
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
        isFetching: state.usersPage.isFetching
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
        },
        setIsFetching: (status) => {
            dispatch(setIsFetching(status));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

