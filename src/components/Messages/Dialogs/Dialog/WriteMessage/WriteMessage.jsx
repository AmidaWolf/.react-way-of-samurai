import React from 'react';

import style from './WriteMessage.module.css';

const WriteMessage = ({addMessage, messageChange, newMessageText}) => {

    let onAddMessage = () => {
        addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        messageChange(text);
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onMessageChange}
                rows="2"
                placeholder="write your message"
                value={newMessageText} />
            <button onClick={onAddMessage}>Send</button>
        </div>
    )
}

export default WriteMessage;
