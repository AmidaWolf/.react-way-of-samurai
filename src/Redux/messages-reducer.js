const SEND_MESSAGE = 'ADD-MESSAGE';
const UPD_NEW_MESSAGE_TEXT = 'UPD-NEW-MESSAGE';

export const messagesReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let lastElement = state.textData.length;
            let newID = lastElement + 1;
            let newMessage = {
                id: newID,
                name: 'I',
                text: state.newMessageText,
            }
            state.textData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
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
