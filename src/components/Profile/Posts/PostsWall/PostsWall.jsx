import React from 'react';

import style from './PostsWall.module.css';
import Post from "./Post/Post";

const PostsWall = () => {
    return(
        <ul className={style.wall}>
            <Post text={'Hi everyone'} likesCount={5}/>
            <Post text={'what\'s next?'} likesCount={3}/>
        </ul>
    )
}

export default PostsWall;