import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className={'app-wrapper'}>
        <header className={'header'}>
            <img className={'header__logo'} src="https://dummyimage.com/60&text=logo" alt="sqare"/>
            <h1 className={'header__title'}><a href="#">AW-wrap</a></h1>
        </header>

        <nav className={'nav'}>
            <ul className={'menu-list'}>
                <li className={'menu-list__item'}><a href="#">Profile</a></li>
                <li className={'menu-list__item'}><a href="#">Messages</a></li>
                <li className={'menu-list__item'}><a href="#">News</a></li>
                <li className={'menu-list__item'}><a href="#">Music</a></li>
                <li className={'menu-list__item'}><a href="#">Settings</a></li>
            </ul>
        </nav>

        <div className={'content'}>
            <div className={'user-info'}>
                <img className={'user-info__wallpaper'} src="https://dummyimage.com/600x150&text=wallpaper" alt="wallpaper"/>
                <img className={'user-info__avatar'} src="https://dummyimage.com/120&text=avatar" alt="avatar"/>
                <div className={'user-info__text'}>
                    <h2 className={'username'}>User Name</h2>
                    <p className={'birthday'}>Date of Birth:</p>
                    <p className={'city'}>City:</p>
                    <p className={'education'}>Education:</p>
                    <p className={'website'}><a href="#">lyaskimasyaski.com</a></p>
                </div>

            </div>

            <div className={'posts'}>
                <h3 className={'posts__title'}>My posts</h3>
                <div className={'posts__writing'}>
                    <textarea name="write-post" id="write-post" rows="2" placeholder="your news..."></textarea>
                    <button>Send</button>
                </div>
                <ul className={'posts__wall'}>
                    <li className={'post'}>
                        <img className={'post__avatar'} src="https://dummyimage.com/50&text=avatar" alt="avatar"/>
                        <p className={'post__text'}>Hey</p>
                    </li>
                    <li className={'post'}>
                        <img className={'post__avatar'} src="https://dummyimage.com/50&text=avatar" alt="avatar"/>
                        <p className={'post__text'}>Hey</p>
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
  );
}

export default App;
