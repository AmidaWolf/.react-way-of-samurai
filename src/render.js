import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {addPost, updNewPostText} from "./Redux/state";

export let renderTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={props}
                addPost={addPost}
                updNewPostText={updNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

