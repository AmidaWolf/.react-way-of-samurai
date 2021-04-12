import React from 'react';

import style from './Paginator.module.css';


let Paginator = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let PagesList = pages.map((el) => {
        return <span
            onClick={()=>{props.getUsers(el, props)}}
            key={el}
            className={props.page === el ? style.selected_page : style.page}>
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
