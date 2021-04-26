import {connect} from "react-redux";

import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        userDialogs : state.messagesPage.usersDialogData,
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
    )(Dialogs);
