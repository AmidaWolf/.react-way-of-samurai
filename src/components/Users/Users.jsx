import React from 'react';

import style from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items, 1);
                })
        }
    }

    getUsers = (page) => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items, page);
                })
        } else {
            axios.get('https://social-network.samuraijs.com/api/1.0/users',
                {
                    params: {
                        page
                    }
                })
                .then(response => {
                    this.props.setUsers(response.data.items, page);
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
                <button
                    className={style.show_button}
                    onClick={() => {
                        this.getUsers(this.props.page)
                    }}>Show more
                </button>
            </div>

        )
    }
}


export default Users;
