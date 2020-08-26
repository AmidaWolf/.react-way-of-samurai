import React from 'react';

import style from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialogs/Dialog/Dialog";

const Messages = (props) => {
    return(
        <div className={style.wrapper}>
            <Dialogs userDialogs={props.state.profilePage.usersDialogData}/>
            <Dialog messages={props.state.messagesPage.textData}/>
        </div>
    )
}

export default Messages;