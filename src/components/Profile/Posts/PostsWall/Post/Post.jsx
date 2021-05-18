import React from 'react';

import style from './Post.module.css';

const Post = (props) => {
    return(
        <li className={style.wrapper}>
            <div className={style.post}>
                <img className={style.avatar} src="https://dummyimage.com/50&text=avatar" alt="avatar"/>
                <p className={style.text}>{props.text}</p>
            </div>
            <p className={style.likes}>likes: {props.likesCount}</p>
            <button className={style.button} onClick={()=>{props.delete(props.id)}}>Delete post</button>
        </li>
    )
}

export default Post;
