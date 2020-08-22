import React from 'react';

import style from './PostsWall.module.css';
import Post from "./Post/Post";

let PostData = [
    {id: 0, text: 'Hi everyone', likes: 5},
    {id: 1, text: 'What\'s next?', likes: 3},
]

const PostsWall = () => {
    return(
        <ul className={style.wall}>
            <Post text={PostData[0].text} likesCount={PostData[0].likes}/>
            <Post text={PostData[1].text} likesCount={PostData[1].likes}/>
        </ul>
    )
}

export default PostsWall;