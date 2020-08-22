import React from 'react';

import style from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialogs/Dialog/Dialog";

const Messages = () => {
    return(
        <div className={style.wrapper}>
            <Dialogs />
            <Dialog />
        </div>
    )
}

export default Messages;