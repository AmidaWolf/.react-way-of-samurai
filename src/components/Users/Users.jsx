import React from 'react';

import style from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";
import Paginator from "./Paginator/Paginator";


class Users extends React.Component {

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
        let UsersList = this.props.users.map((el) => {
            return <User
                id={el.id}
                photoUrl={el.photos.small}
                name={el.name}
                followed={el.followed}
                status={el.status}
                key={el.id}
                follow={this.props.followUser}
                unfollow={this.props.unFollowUser}
            />
        })


        return (
            <div className={style.users_wrapper}>
                <ul className={style.users}>
                    {UsersList}
                </ul>
                <Paginator
                    users={this.props.users}
                    setUsers={this.props.setUsers}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    page={this.props.page}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                />
            </div>

        )
    }
}


export default Users;
