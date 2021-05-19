import React from 'react';
import {Redirect} from "react-router-dom";

import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = ({userDialogs, isAuth}) => {

    let UserDialogs = userDialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} key={el.id}/>
    })

    if(!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <ul className={style.dialogs}>
            {UserDialogs}
        </ul>
    )
}

export default Dialogs;
