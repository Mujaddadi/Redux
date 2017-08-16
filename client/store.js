import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory} from 'react-router'; 

import rootReducers from './reducers/index'; // Main reducers file

import comments from './data/comments'; //Comments data. Should be fetched from API
import posts from './data/posts';  //Posts data. Should be fetched from API

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducers, defaultState); // create store with state and reducers

export const history = syncHistoryWithStore(browserHistory, store); //sync teh store with browser history

export default store;

