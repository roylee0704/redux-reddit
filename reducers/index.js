import { combineReducers } from 'redux';

function selectedReddit(state, action) {
    return 'reactjs';
}

const appReducer = combineReducers({
   selectedReddit
});

export default appReducer;