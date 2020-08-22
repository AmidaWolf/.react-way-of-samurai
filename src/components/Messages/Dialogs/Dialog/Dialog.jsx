import React from 'react';

import style from './Dialog.module.css';
import Message from "./Message/Message";

let TextData = [
    {id: 0, text: 'Sup'},
    {id: 1, text: 'Where my money'},
]

const Dialog = (props) => {
    return(
        <div className={style.dialog}>
            <Message name={props.name} text={TextData[0].text}/>
            <Message name={props.name} text={TextData[1].text} />
        </div>
    )
}

export default Dialog;