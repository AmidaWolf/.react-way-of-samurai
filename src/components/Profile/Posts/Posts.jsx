import React from 'react';

import style from './Posts.module.css';
import WritePost from "./WritePost/WritePost";
import PostsWall from "./PostsWall/PostsWall";

const Posts = () => {
    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <WritePost />
            <PostsWall />
        </div>
    )
}

export default Posts;