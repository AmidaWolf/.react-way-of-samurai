import React from 'react';

import * as axios from "axios";
import Paginator from "./Paginator";

class PaginatorContainer extends React.Component {
    getUsers = (page) => {
        this.props.setIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users',
            {
                params: {
                    page: page,
                    withCredentials : true
                }
            })
            .then(response => {
                this.props.setUsers(response.data.items, page);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setIsFetching(false);
            })

    }

   render() {
       return(
           <Paginator
               page={this.props.page}
               pageSize={this.props.pageSize}
               totalUsersCount={this.props.totalUsersCount}
               getUsers={this.getUsers}
           />
       )
   }
}

export default PaginatorContainer;
