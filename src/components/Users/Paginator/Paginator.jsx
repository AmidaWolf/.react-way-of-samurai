import React from 'react';

import style from './Paginator.module.css';


let Paginator = ({totalItemsCount, pageSize, getUsers, page}) => {
    const portionSize = 7;

    let pages = [];
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let leftFirstItem;
    if (page <=3) {
        leftFirstItem = page - page + 1;
    } else {
        leftFirstItem = page - 3;
    }

    let rightLastItem;
    if (page > pagesCount - 3) {
        rightLastItem = (pagesCount - page) + page;
    } else {
        rightLastItem = page + 3;
    }

    const goToPortion = (portion) => {
        getUsers(portion);
    }

    let PagesList = pages
        .filter(el => el >= leftFirstItem && el<= rightLastItem)
        .map((el) => {
        return <span
            onClick={()=>{getUsers(el)}}
            key={el}
            className={
                page === el ?
                    style.selected_page :
                    page === el - 1 || page === el + 1 ?
                        style.small :
                        page === el - 2 || page + 2 ?
                            style.smallest :
                            style.page
            }>
            {el}
        </span>;
    })

    return(
        <>

            <div className={style.pagination}>
                {
                    page <= 4 ?
                        null :
                        <button
                            className={style.button}
                            onClick={()=>{goToPortion(1)}}
                        >Start</button>
                }
                {
                    page > 7 ?
                        <button
                            className={style.button}
                            onClick={()=>{goToPortion(page - portionSize)}}
                        >Left</button> :
                        null
                }
                {PagesList}
                {
                    page <= pagesCount - 7 ?
                        <button
                            className={style.button}
                            onClick={()=>{goToPortion(page + portionSize)}}
                        >Right</button> :
                        null
                }
                {
                    page > pagesCount - 4 ?
                        null :
                        <button
                            className={style.button}
                            onClick={()=>{goToPortion(pagesCount)}}
                        >End</button>
                }
            </div>

        </>

    )
}

export default Paginator;
