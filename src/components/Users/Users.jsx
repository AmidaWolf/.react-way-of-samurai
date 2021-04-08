import React from 'react';

import style from './Users.module.css';
import User from "./User/User";

const Users = (props) => {
    let UsersList = props.users.map((el) => {
        return <User
            id={el.id}
            photoUrl={el.photoUrl}
            firstName={el.fullName.firstName}
            shortSecondName={el.fullName.shortSecondName}
            city={el.location.city}
            country={el.location.country}
            followed={el.followed}
            status={el.status}
            key={el.id}
            follow={props.followUser}
            unfollow={props.unFollowUser}
        />
    })

    return(
        <div className={style.users_wrapper}>
            <ul className={style.users}>
                { UsersList }
            </ul>
            <button
                className={style.show_button}
                onClick={props.setUsers}>Show more
            </button>
        </div>

    )
}

export default Users;
