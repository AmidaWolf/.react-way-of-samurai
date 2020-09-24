import React from 'react';

import style from './WriteMessage.module.css';
import {addMessageActionCreator, updNewMessageActionCreator} from "../../../../../Redux/state";

const WriteMessage = (props) => {

    let newMessageArea = React.createRef();

    let addPost = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onPostChange = () => {
        let text = newMessageArea.current.value;
        props.dispatch(updNewMessageActionCreator(text));
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onPostChange}
                ref={newMessageArea}
                rows="2"
                placeholder="write your message"
                value={props.newMessageText} />
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default WriteMessage;