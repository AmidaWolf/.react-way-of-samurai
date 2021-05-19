import React from 'react';

//import style from './Dialog.module.css';
import Message from "./Message/Message";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";


const Dialog = ({textData}) => {

    let Messages = textData.map((el) => {
    return <Message name={el.name} text={el.text} key={el.id}/>
})

    return(
        <div>
            <div>
                {Messages}
            </div>
            <WriteMessageContainer />
        </div>


    )
}

export default Dialog;
