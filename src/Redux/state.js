const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TEXT = 'UPD-NEW-POST-TEXT';
const SEND_MESSAGE = 'ADD-MESSAGE';
const UPD_NEW_MESSAGE_TEXT = 'UPD-NEW-MESSAGE';

let store = {
    _state: { //if with _ - private, change only into this object
        profilePage: {
            postData: [
                {id: 0, text: 'Hi everyone', likes: 5},
                {id: 1, text: 'What\'s next?', likes: 3}
            ],
            newPostText: ''
        },
        messagesPage: {
            textData: [
                {id: 0, name: 'Kus', text: 'Sup'},
                {id: 1, name: 'Kus', text: 'Where my money?'}
            ],
            newMessageText: '',
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

    },
    _callSubscriber () {}, //need for subscribe, this is method

    getState () {
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }, //callback

    dispatch (action) {
        if (action.type === ADD_POST) {
            let lastElement = this._state.profilePage.postData.length;
            let newID = lastElement + 1;
            let newPost = {
                id: newID,
                text: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPD_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let lastElement = this._state.messagesPage.textData.length;
            let newID = lastElement + 1;
            let newMessage = {
                id: newID,
                name: 'I',
                text: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.textData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPD_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updNewPostTextActionCreator = (text) => {

    return {
        type: UPD_NEW_POST_TEXT,
        newText: text
    }
}
export const updNewMessageTextActionCreator = (text) => {

    return {
        type: UPD_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default store;
window.store = store; //for global (access from console)
