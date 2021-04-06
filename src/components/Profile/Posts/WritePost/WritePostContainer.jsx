import React from 'react';

import {addPostActionCreator, updNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import WritePost from "./WritePost";


const WritePostContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postChange = (text) => {
        props.dispatch(updNewPostTextActionCreator(text));
    }

    return <WritePost
        addPost = {addPost}
        postChange = {postChange}
        newPostText = {props.newPostText}
    />
}

export default WritePostContainer;
