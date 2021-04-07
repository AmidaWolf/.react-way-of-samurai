import React from 'react';

import style from './Messages.module.css';
import DialogsContainer from "./Dialogs/DialogsContainer";
import DialogContainer from "./Dialogs/Dialog/DialogContainer";


const Messages = () => {
    return (
        <div className={style.wrapper}>
            <DialogsContainer />
            <DialogContainer />
        </div>
    )
}

export default Messages;
