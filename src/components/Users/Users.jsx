import React from 'react';

import style from './Users.module.css';
import User from "./User/User";
import Paginator from "./Paginator/Paginator";

 let Users = (props) => {
     let UsersList = props.users.map((el) => {
         return <User
             id={el.id}
             photoUrl={el.photos.small}
             name={el.name}
             followed={el.followed}
             status={el.status}
             key={el.id}
             follow={props.follow}
             unfollow={props.unfollow}
         />
     })

     return (
         <div className={style.users_wrapper}>
             <ul className={style.users}>
                 {UsersList}
             </ul>
             <Paginator
                 users={props.users}
                 setUsers={props.setUsers}
                 setTotalUsersCount={props.setTotalUsersCount}
                 page={props.page}
                 pageSize={props.pageSize}
                 totalUsersCount={props.totalUsersCount}
             />
         </div>
     )
}

export default Users;
