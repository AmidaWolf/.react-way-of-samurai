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
    getState () {
      return this._state;
    },
    _callSubscriber () {},
    //need for subscribe
    addPost: function () {

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
    },
    updNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }, //callback

}

export default store;
window.store = store; //for global