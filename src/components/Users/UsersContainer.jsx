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
        if (this.props.users.length === 0) {
            this.props.getUsers(1);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={this.props.users}
                    page={this.props.page}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    followInProgress={this.props.followInProgress}

                    getUsers={this.props.getUsers}
                    toggleFollowUser={this.props.toggleFollowUser}
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
        followInProgress: state.usersPage.followInProgress
    }
}

export default connect(mapStateToProps, {
    getUsers,
    toggleFollowUser
})(UsersContainer);

