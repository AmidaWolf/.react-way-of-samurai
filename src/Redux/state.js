import {renderTree} from "../render";

let state ={
    profilePage: {
        postData: [
            {id: 0, text: 'Hi everyone', likes: 5},
            {id: 1, text: 'What\'s next?', likes: 3},
        ],
        usersDialogData: [
            {id: 0, name: 'Kus Kabanov'},
            {id: 1, name: 'Gus Kabanov'},
            {id: 2, name: 'Srus Kabanov'}
        ]
    },
    messagesPage: {
        textData: [
            {name: 'Kus', text: 'Sup'},
            {name: 'Kus', text: 'Where my money?'}
        ]
    },
    navigationBlock: {
        onlineFriends: [
            {id: 0, name: 'Kus Kabanov'},
            {id: 1, name: 'Gus Kabanov'},
        ]
    }

}

export let addPost = (postMessage) => {

    let lastElement = state.profilePage.postData.length;
    let newID = lastElement + 1;

    let newPost = {
        id: {newID},
        text: postMessage,
        likes: 0
    }

    state.profilePage.postData.push(newPost);
    renderTree(state);
}

export default state;