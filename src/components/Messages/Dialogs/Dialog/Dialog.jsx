import React from 'react';

import style from './Dialog.module.css';

const Dialog = () => {
    return(
        <div className={style.dialog}>
            <div className={style.message}>
                <img src="https://dummyimage.com/60&text=avatar" alt="avatar"/>
                <p className={style.messageText}>Sup</p>
            </div>
            <div className={style.message}>
                <img src="https://dummyimage.com/60&text=avatar" alt="avatar"/>
                <p className={style.messageText}>Where my money?</p>
            </div>
        </div>
    )
}

export default Dialog;