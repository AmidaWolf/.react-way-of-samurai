import React from 'react';

import style from './Post.module.css';
import avatar from '../../../../../img/50&text=avatar.png';

const Post = (props) => {
    return(
        <li className={style.wrapper}>
            <div className={style.post}>
                <img className={style.avatar} src={avatar} alt="avatar"/>
                <p className={style.text}>{props.text}</p>
            </div>
            <p className={style.likes}>likes: {props.likesCount}</p>
            {props.isOwner ?
                <button
                    className={style.button}
                    onClick={()=>{props.delete(props.id)}}>Delete post</button> : null
            }

        </li>
    )
}

export default Post;
