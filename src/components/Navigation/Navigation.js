import React from 'react';

import './Navigation.css';

const Navigation = () => {
    return(
        <nav className={'nav'}>
            <ul className={'menu-list'}>
                <li className={'menu-list__item'}><a href="#">Profile</a></li>
                <li className={'menu-list__item'}><a href="#">Messages</a></li>
                <li className={'menu-list__item'}><a href="#">News</a></li>
                <li className={'menu-list__item'}><a href="#">Music</a></li>
                <li className={'menu-list__item'}><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;