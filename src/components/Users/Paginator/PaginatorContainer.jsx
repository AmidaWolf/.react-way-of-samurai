import React from 'react';


import Paginator from "./Paginator";
import {getUsersApi} from "../../../api/api";

class PaginatorContainer extends React.Component {
    getUsers = (page) => {
        this.props.setIsFetching(true);
            getUsersApi(page).then(response => {
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
