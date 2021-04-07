import {connect} from "react-redux";

import Dialog from "./Dialog";


const mapStateToProps = (state) => {
    return {
        textData : state.messagesPage.textData
    }
}

const DialogContainer = connect(mapStateToProps) (Dialog)

export default DialogContainer;
