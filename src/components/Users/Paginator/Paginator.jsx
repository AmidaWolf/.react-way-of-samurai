import React from 'react';

import style from './Paginator.module.css';
import * as axios from "axios";

class Paginator extends React.Component {
    getUsers = (page) => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users',
            {
                params: {
                    page: page
                }
            })
            .then(response => {
                this.props.setUsers(response.data.items, page);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }
    
   render() {
       let pages = [];
       let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
       for (let i = 1; i <= pagesCount; i++) {
           pages.push(i);
       }
       let PagesList = pages.map((el) => {
           return <span
               onClick={()=>{this.getUsers(el)}}
               key={el}
               className={this.props.page === el ? style.selected_page : style.page}>
            {el}
        </span>;
       })

       return(
           <div className={style.pagination}>
               {PagesList}
           </div>
       )
   }


}

export default Paginator;
