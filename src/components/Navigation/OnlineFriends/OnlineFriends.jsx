import React from 'react';

import style from './OnlineFriends.module.css';
import OnlineFriend from "./OnlineFriend/OnlineFriend";


const OnlineFriends = (props) => {
    let OnlineFriendItem = props.state.onlineFriends.map((el) => {
        return <OnlineFriend name={el.name} id={el.id}/>
    })

    return(
            <ul className={style.online}>
                {OnlineFriendItem}
            </ul>

    )
}

export default OnlineFriends;