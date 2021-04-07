import {connect} from "react-redux";

import WriteMessage from "./WriteMessage";
import {sendMessageActionCreator,
    updNewMessageTextActionCreator} from "../../../../../Redux/messages-reducer";




const mapStateToProps = (state) => {
    return {
        newMessageText : state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        messageChange: (text) => {
            dispatch(updNewMessageTextActionCreator(text));
        }
    }
}

const WriteMessageContainer = connect(mapStateToProps, mapDispatchToProps) (WriteMessage)

export default WriteMessageContainer;
