import React from 'react';

import style from './PostsWall.module.css';
import Post from "./Post/Post";

const PostsWall = () => {
    return(
        <ul className={style.wall}>
            <Post />
            <Post />
        </ul>
    )
}

export default PostsWall;