import React from 'react';

//import style from './Dialog.module.css';
import Message from "./Message/Message";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";


const Dialog = (props) => {

    let Messages = props.state.textData.map((el) => {
    return <Message name={el.name} text={el.text}/>
})

    return(
        <div>
            <div>
                {Messages}
            </div>
            <WriteMessageContainer
                newMessageText={props.state.newMessageText}
                dispatch={props.dispatch}
            />
        </div>


    )
}

export default Dialog;
