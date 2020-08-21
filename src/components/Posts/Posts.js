import React from 'react';

import './Posts.css';
import WritePost from "../WritePost/WritePost";
import PostsWall from "../PostsWall/PostsWall";

const Posts = () => {
    return(
        <div className={'posts'}>
            <h3 className={'posts__title'}>My posts</h3>
            <WritePost />
            <PostsWall />
        </div>
    )
}

export default Posts;