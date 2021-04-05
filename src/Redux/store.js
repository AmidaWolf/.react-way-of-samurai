import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {navigationReducer} from "./navigation-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navigationBlock = navigationReducer(this._state.navigationBlock, action);

        this._callSubscriber(this._state);
    }

}


export default store;
window.store = store; //for global (access from console)
