import React from 'react';

import style from './WritePost.module.css';

const WritePost = (props) => {

    let newPostArea = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostArea.current.value;
        props.dispatch({
            type: 'UPD-NEW-POST-TEXT',
            newText: text
        });
    }

    return (
        <div className={style.writing}>
            <textarea
                onChange={onPostChange}
                ref={newPostArea}
                rows="2"
                placeholder="your news..."
                value={props.newPostText} />
            <button onClick={addPost}>Send</button>
        </div>
    )
}

export default WritePost;