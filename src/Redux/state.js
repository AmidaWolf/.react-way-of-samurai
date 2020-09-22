let store = {
    _state: {
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

    },
    _callSubscriber () {}, //need for subscribe

    getState () {
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }, //callback

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let lastElement = this._state.profilePage.postData.length;
            let newID = lastElement + 1;

            let newPost = {
                id: {newID},
                text: this._state.profilePage.newPostText,
                likes: 0
            }

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPD-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;
window.store = store; //for global