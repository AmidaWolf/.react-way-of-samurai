import React from 'react';

import style from './Header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
            <img className={style.logo} src="https://dummyimage.com/60&text=logo" alt="sqare"/>
            <h1 className={style.title}><a href="#">MonoChrome</a></h1>
        </header>
    )
}

export default Header;