import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostData = [
    {id: 0, text: 'Hi everyone', likes: 5},
    {id: 1, text: 'What\'s next?', likes: 3},
]

let UsersDialogData = [
    {id: 1, name: 'Kus Kabanov'},
    {id: 2, name: 'Gus Kabanov'},
    {id: 3, name: 'Srus Kabanov'}
]

let TextData = [
    {name: 'Kus', text: 'Sup'},
    {name: 'Kus', text: 'Where my money?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={PostData} userDialogs ={UsersDialogData} messages={TextData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
