import React from 'react';

//import style from './Dialog.module.css';
import Message from "./Message/Message";


const Dialog = (props) => {

    let Messages = props.messages.map((el) => {
    return <Message name={el.name} text={el.text}/>
})

    return(
        <div>
            {Messages}
        </div>

    )
}

export default Dialog;