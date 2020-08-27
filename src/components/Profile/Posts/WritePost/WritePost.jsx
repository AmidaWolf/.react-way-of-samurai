import React from 'react';

import style from './WritePost.module.css';

const WritePost = (props) => {

    let newPostArea = React.createRef();

    let addPost = () => {
        let text = newPostArea.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.writing}>
            <textarea ref={newPostArea} rows="2" placeholder="your news..."></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default WritePost;