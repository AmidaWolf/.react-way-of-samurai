import React from 'react';

import style from './Posts.module.css';
import PostsWall from "./PostsWall/PostsWall";
import WritePostContainer from "./WritePost/WritePostContainer";
import StoreContext from "../../../storeContext";

const Posts = () => {
    return(
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <div className={style.posts}>
                    <h3 className={style.title}>My posts</h3>
                    <WritePostContainer
                        newPostText={state.profilePage.newPostText}
                        dispatch={store.dispatch}
                    />
                    <PostsWall posts={state.profilePage.postData}/>
                </div>
                }
            }
        </StoreContext.Consumer>

    )
}

export default Posts;
