import React from 'react';

import style from './Post.module.css';

const Post = (props) => {
    return(
        <li className={style.post}>
            <img className={style.avatar} src="https://dummyimage.com/50&text=avatar" alt="avatar"/>
            <p className={style.text}>{props.text} <span>{props.likesCount}</span></p>
        </li>
    )
}

export default Post;