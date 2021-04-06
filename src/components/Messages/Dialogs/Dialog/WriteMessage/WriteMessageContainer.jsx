import React from 'react';

import {sendMessageActionCreator, updNewMessageTextActionCreator} from "../../../../../Redux/messages-reducer";
import WriteMessage from "./WriteMessage";

const WriteMessageContainer = (props) => {

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let messageChange = (text) => {
        props.dispatch(updNewMessageTextActionCreator(text));
    }

    return (
        <WriteMessage
            addMessage = {addMessage}
            messageChange = {messageChange}
            newMessageText = {props.newMessageText}
        />
    )
}

export default WriteMessageContainer;
