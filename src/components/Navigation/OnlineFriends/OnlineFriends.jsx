import React from 'react';

import style from './OnlineFriends.module.css';
import OnlineFriend from "./OnlineFriend/OnlineFriend";
import StoreContext from "../../../storeContext";


const OnlineFriends = () => {
    return(
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let OnlineFriendItem = state.navigationBlock.onlineFriends.map((el) => {
                    return <OnlineFriend name={el.name} id={el.id}/>
                })

                return <ul className={style.online}>
                    {OnlineFriendItem}
                </ul>
                }
            }
        </StoreContext.Consumer>


    )
}

export default OnlineFriends;
