import React from 'react';

import style from './WritePost.module.css';


const WritePost = (props) => {

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.postChange(text);
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onPostChange}
                rows="2"
                placeholder="your news..."
                value={props.newPostText} />
            <button onClick={onAddPost}>Send</button>
        </div>
    )
}

export default WritePost;
