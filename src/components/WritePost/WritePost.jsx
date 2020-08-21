import React from 'react';

import style from './WritePost.module.css';

const WritePost = () => {
    return(
        <div className={style.writing}>
            <textarea name="write-post" id="write-post" rows="2" placeholder="your news..."></textarea>
            <button>Send</button>
        </div>
    )
}

export default WritePost;