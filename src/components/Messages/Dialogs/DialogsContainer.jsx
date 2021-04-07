import {connect} from "react-redux";

import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        userDialogs : state.messagesPage.usersDialogData
    }
}

const DialogsContainer = connect(mapStateToProps) (Dialogs);

export default DialogsContainer;
