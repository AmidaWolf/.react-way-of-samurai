import React from 'react';

import style from './Preloader.module.css';
import preloader from "../../img/loading.svg";

let Preloader = () => {
    return <img className={style.preloader} src={preloader} alt="loading"/>
}

export default Preloader;
