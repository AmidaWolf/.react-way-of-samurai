import React from 'react';

import style from './PostsWall.module.css';
import Post from "./Post/Post";

let PostData = [
    {id: 0, text: 'Hi everyone', likes: 5},
    {id: 1, text: 'What\'s next?', likes: 3},
]

let Posts =PostData.map((el) => {
    return <Post text={el.text} likesCount={el.likes}/>
})

const PostsWall = () => {
    return(
        <ul className={style.wall}>
            { Posts }
        </ul>
    )
}

export default PostsWall;