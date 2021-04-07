const SEND_MESSAGE = 'ADD-MESSAGE';
const UPD_NEW_MESSAGE_TEXT = 'UPD-NEW-MESSAGE';

let initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let lastElement = state.textData.length;
            let newID = lastElement + 1;
            let newMessage = {
                id: newID,
                name: 'I',
                text: state.newMessageText,
            }
            return  {
                ...state,
                newMessageText : '',
                textData : [...state.textData, newMessage]
            };

        case UPD_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText : action.newText
            };

        default:
            return state;
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updNewMessageTextActionCreator = (text) => {

    return {
        type: UPD_NEW_MESSAGE_TEXT,
        newText: text
    }
}
