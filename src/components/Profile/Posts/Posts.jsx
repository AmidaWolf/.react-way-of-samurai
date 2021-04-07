import React from 'react';

import style from './Posts.module.css';
import WritePostContainer from "./WritePost/WritePostContainer";
import PostsWallContainer from "./PostsWall/PostsWallContainer";

const Posts = () => {
    return (
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <WritePostContainer/>
            <PostsWallContainer/>
        </div>
    )
}

export default Posts;
