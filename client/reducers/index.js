import { combineReducers} from 'redux' //Import combineReducers function from redux
import { routerReducer} from 'react-router-redux' //Import router reducer from react-router-redux

import posts from './posts'; //import post reducer
import comments from './comments';  //import comment reducer

const rootReducer = combineReducers({posts, comments, routing: routerReducer}); //combine all the reducers

export default rootReducer; //Export the combined reducer