import React from 'react';

import style from './Message.module.css';


const Message = (props) => {
    return (
        <div className={style.message}>
            <div>
                <img src="https://dummyimage.com/60&text=avatar" alt="avatar"/>
                <h3 className={style.name}>{props.name}</h3>
            </div>
            <p className={style.messageText}>{props.text}</p>
        </div>
    )
}

export default Message;