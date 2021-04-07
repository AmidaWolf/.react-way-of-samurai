import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';
// import store from "./Redux/store";
import {store} from "./Redux/redux-store";

import App from './App';
import StoreContext from "./storeContext";

let renderTree = (state) => {
    ReactDOM.render(
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        ,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderTree(state);
}); //callback to state with anonymous function


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
