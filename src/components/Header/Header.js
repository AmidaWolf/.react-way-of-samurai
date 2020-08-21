import React from 'react';

import './Header.css';

const Header = () => {
    return(
        <header className={'header'}>
            <img className={'header__logo'} src="https://dummyimage.com/60&text=logo" alt="sqare"/>
            <h1 className={'header__title'}><a href="#">AW-wrap</a></h1>
        </header>
    )
}

export default Header;