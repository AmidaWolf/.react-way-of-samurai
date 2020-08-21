import React from 'react';

import './Post.css';

const Post = () => {
    return(
        <li className={'post'}>
            <img className={'post__avatar'} src="https://dummyimage.com/50&text=avatar" alt="avatar"/>
            <p className={'post__text'}>Hey</p>
        </li>
    )
}

export default Post;