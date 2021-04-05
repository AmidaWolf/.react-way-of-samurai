import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';
import store from "./Redux/state";
import App from './App';

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App //del strict mode, only for debug
                state={state}
                dispatch={store.dispatch.bind(store)} //bind for this always = store
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe(renderTree); //callback to state


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
