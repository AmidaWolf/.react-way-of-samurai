import React from 'react';

import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


let UsersDialogData = [
    {id: 1, name: 'Kus Kabanov'},
    {id: 2, name: 'Gus Kabanov'},
    {id: 3, name: 'Srus Kabanov'}
]

const Dialogs = () => {
    return (
        <ul className={style.dialogs}>
            <DialogItem name={UsersDialogData[0].name} id={UsersDialogData[0].id}/>
            <DialogItem name={UsersDialogData[1].name} id={UsersDialogData[1].id}/>
            <DialogItem name={UsersDialogData[2].name} id={UsersDialogData[2].id}/>
        </ul>
    )
}

export default Dialogs;