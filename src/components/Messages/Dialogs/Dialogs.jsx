import React from 'react';

import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


let UsersDialogData = [
    {id: 1, name: 'Kus Kabanov'},
    {id: 2, name: 'Gus Kabanov'},
    {id: 3, name: 'Srus Kabanov'}
]

let UserDialogs = UsersDialogData.map((el) => {
    return <DialogItem name={el.name} id={el.id}/>
})

const Dialogs = () => {
    return (
        <ul className={style.dialogs}>
            {UserDialogs}
        </ul>
    )
}

export default Dialogs;