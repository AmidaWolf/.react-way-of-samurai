import {connect} from "react-redux";

import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


const mapStateToProps = (state) => {
    return {
        userDialogs : state.messagesPage.usersDialogData,
    }
}

const DialogsContainer = connect(mapStateToProps) (withAuthRedirect(Dialogs));

export default DialogsContainer;
