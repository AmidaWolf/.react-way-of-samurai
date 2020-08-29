import React from 'react';

import style from './Posts.module.css';
import WritePost from "./WritePost/WritePost";
import PostsWall from "./PostsWall/PostsWall";

const Posts = (props) => {
    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <WritePost
                newPostText={props.state.newPostText}
                addPost={props.addPost}
                updNewPostText={props.updNewPostText}
            />
            <PostsWall posts={props.state.postData}/>
        </div>
    )
}

export default Posts;