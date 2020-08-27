import React from 'react';

import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let UserDialogs = props.userDialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    return (
        <ul className={style.dialogs}>
            {UserDialogs}
        </ul>
    )
}

export default Dialogs;