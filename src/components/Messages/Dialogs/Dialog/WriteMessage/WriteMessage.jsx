import React from 'react';

import style from './WriteMessage.module.css';

const WriteMessage = (props) => {

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.messageChange(text);
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onMessageChange}
                rows="2"
                placeholder="write your message"
                value={props.newMessageText} />
            <button onClick={onAddMessage}>Send</button>
        </div>
    )
}

export default WriteMessage;
