import {renderTree} from "../render";

let state ={
    profilePage: {
        postData: [
            {id: 0, text: 'Hi everyone', likes: 5},
            {id: 1, text: 'What\'s next?', likes: 3}
        ],
        newPostText: ''
    },
    messagesPage: {
        textData: [
            {name: 'Kus', text: 'Sup'},
            {name: 'Kus', text: 'Where my money?'}
        ],
        usersDialogData: [
            {id: 0, name: 'Kus Kabanov'},
            {id: 1, name: 'Gus Kabanov'},
            {id: 2, name: 'Srus Kabanov'}
        ],
    },
    navigationBlock: {
        onlineFriends: [
            {id: 0, name: 'Kus Kabanov'},
            {id: 1, name: 'Gus Kabanov'},
        ]
    }

}

export let addPost = () => {

    let lastElement = state.profilePage.postData.length;
    let newID = lastElement + 1;

    let newPost = {
        id: {newID},
        text: state.profilePage.newPostText,
        likes: 0
    }

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export let updNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderTree(state)
}

export default state;