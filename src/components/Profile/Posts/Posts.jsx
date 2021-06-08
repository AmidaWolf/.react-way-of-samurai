import React from 'react';

import style from './Posts.module.css';
import WritePostContainer from "./WritePost/WritePostContainer";
import PostsWallContainer from "./PostsWall/PostsWallContainer";

const Posts = ({isOwner}) => {
    return (
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            {isOwner ? <WritePostContainer/> : null}
            <PostsWallContainer isOwner={isOwner}/>
        </div>
    )
}

export default Posts;
