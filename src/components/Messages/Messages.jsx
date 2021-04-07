import React from 'react';

import style from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialogs/Dialog/Dialog";
import StoreContext from "../../storeContext";


const Messages = () => {
    return(
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                return <div className={style.wrapper}>
                    <Dialogs userDialogs={state.messagesPage.usersDialogData}/>
                    <Dialog
                        state={state.messagesPage}
                        dispatch={store.dispatch}
                    />
                </div>
                }
            }
        </StoreContext.Consumer>

    )
}

export default Messages;
