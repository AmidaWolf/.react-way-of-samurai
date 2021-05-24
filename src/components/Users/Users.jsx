import React from 'react';

import style from './Users.module.css';
import User from "./User/User";
import Paginator from "./Paginator/Paginator";


 let Users = ({users, followInProgress,
                  toggleFollowUser, page,
                  pageSize, totalUsersCount,
                  getUsers, isAuth}) => {
     let UsersList = users.map((el) => {
         return <User
             id={el.id}
             photoUrl={el.photos.small}
             name={el.name}
             followed={el.followed}
             status={el.status}
             key={el.id}
             isAuth={isAuth}
             followInProgress={followInProgress}
             toggleFollowUser={toggleFollowUser}
         />
     })

     return (
         <div className={style.users_wrapper}>
             <ul className={style.users}>
                 {UsersList}
             </ul>
             <Paginator
                 users={users}
                 page={page}
                 pageSize={pageSize}
                 totalItemsCount={totalUsersCount}

                 getUsers={getUsers}
             />
         </div>
     )
}

export default Users;
