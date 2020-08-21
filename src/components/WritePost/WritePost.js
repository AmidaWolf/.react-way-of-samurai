import React from 'react';

import './WritePost.css';

const WritePost = () => {
    return(
        <div className={'posts__writing'}>
            <textarea name="write-post" id="write-post" rows="2" placeholder="your news..."></textarea>
            <button>Send</button>
        </div>
    )
}

export default WritePost;