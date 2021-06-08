import React from 'react';

import style from './PostsWall.module.css';
import Post from "./Post/Post";


const PostsWall = (props) => {
    let Posts = props.posts.map((el) => {
    return <Post
        text={el.text}
        likesCount={el.likes}
        key={el.id}
        id={el.id}
        isOwner={props.isOwner}
        delete={props.deletePostActionCreator}/>
})

    return(
        <ul className={style.wall}>
            { Posts }
        </ul>
    )
}

export default PostsWall;
