import React from 'react';

import style from './OnlineFriends.module.css';
import OnlineFriend from "./OnlineFriend/OnlineFriend";


const OnlineFriends = ({onlineFriends}) => {

    let OnlineFriendItem = onlineFriends.map((el) => {
        return <OnlineFriend name={el.name} id={el.id} key={el.id}/>
    })

    return (
        <ul className={style.online}>
            {OnlineFriendItem}
        </ul>
    )
}

export default OnlineFriends;
