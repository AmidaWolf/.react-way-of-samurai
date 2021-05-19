import React from 'react';

import style from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, getUsers, page}) => {
    let pages = [];
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let PagesList = pages.map((el) => {
        return <span
            onClick={()=>{getUsers(el)}}
            key={el}
            className={page === el ? style.selected_page : style.page}>
            {el}
        </span>;
    })

    return(
        <div className={style.pagination}>
            {PagesList}
        </div>
    )
}

export default Paginator;
