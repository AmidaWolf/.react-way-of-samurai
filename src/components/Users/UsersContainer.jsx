import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";

import {
    follow,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true);
            axios.get('https://social-network.samuraijs.com/api/1.0/users',
                {withCredentials : true})
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
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer);

