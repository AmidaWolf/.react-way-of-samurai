const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 0, text: 'Hi everyone', likes: 5},
        {id: 1, text: 'What\'s next?', likes: 3}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let lastElement = state.postData.length;
            let newID = lastElement + 1;
            let newPost = {
                id: newID,
                text: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPD_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updNewPostTextActionCreator = (text) => {

    return {
        type: UPD_NEW_POST_TEXT,
        newText: text
    }
}
