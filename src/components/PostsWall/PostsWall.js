import React from 'react';

import './PostsWall.css';
import Post from "./Post/Post";

const PostsWall = () => {
    return(
        <ul className={'posts__wall'}>
            <Post />
            <Post />
        </ul>
    )
}

export default PostsWall;