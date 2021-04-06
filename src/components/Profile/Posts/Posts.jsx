import React from 'react';

import style from './Posts.module.css';
import PostsWall from "./PostsWall/PostsWall";
import WritePostContainer from "./WritePost/WritePostContainer";

const Posts = (props) => {
    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <WritePostContainer
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
            <PostsWall posts={props.state.postData}/>
        </div>
    )
}

export default Posts;
