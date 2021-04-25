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
             followInProgress={props.followInProgress}

             toggleFollowUser={props.toggleFollowUser}

         />
     })

     return (
         <div className={style.users_wrapper}>
             <ul className={style.users}>
                 {UsersList}
             </ul>
             <Paginator
                 users={props.users}
                 page={props.page}
                 pageSize={props.pageSize}
                 totalUsersCount={props.totalUsersCount}

                 getUsers={props.getUsers}
             />
         </div>
     )
}

export default Users;
