import React from 'react';

import style from './WriteMessage.module.css';
import {sendMessageActionCreator, updNewMessageTextActionCreator} from "../../../../../Redux/messages-reducer";

const WriteMessage = (props) => {

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updNewMessageTextActionCreator(text));
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onMessageChange}
                rows="2"
                placeholder="write your message"
                value={props.newMessageText} />
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default WriteMessage;
