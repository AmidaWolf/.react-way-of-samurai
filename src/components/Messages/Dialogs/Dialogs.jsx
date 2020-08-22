import React from 'react';

import style from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <ul className={style.dialogs}>
            <li className={style.itemLink}>
                <a href="/p1">Kus Kabanov</a>
            </li>
            <li className={style.itemLink}>
                <a href="/p2">Gus Kabanov</a>
            </li>
            <li className={style.itemLink}>
                <a href="/p3">Srus Kabanov</a>
            </li>
        </ul>
    )
}

export default Dialogs;