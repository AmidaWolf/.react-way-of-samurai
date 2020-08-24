import React from 'react';

//import style from './Dialog.module.css';
import Message from "./Message/Message";

let TextData = [
    {name: 'Kus', text: 'Sup'},
    {name: 'Kus', text: 'Where my money?'},
]

let Messages = TextData.map((el) => {
    return <Message name={el.name} text={el.text}/>
})

const Dialog = () => {
    return(
        <div>
            {Messages}
        </div>

    )
}

export default Dialog;