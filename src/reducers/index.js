import { combineReducers } from 'redux';
import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_REDDIT } from '../actions/enum';

/**
 * Named after variable.
 * This function handles the update of variable: selectedReddit
 * @param state
 * @param action
 * @returns {string}
 */
function selectedReddit(state = 'reactjs', action = null) {
  switch (action.type) {
  case SELECT_REDDIT:
    return action.reddit;
  default:
    return state;
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action = {}) {
  switch (action.type) {
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
  case INVALIDATE_REDDIT:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  default:
    return state;
  }
}

function postsByReddit(state = {}, action = null) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    const nextState = {};
    nextState[action.reddit] = posts(state[action.reddit], action);
    return Object.assign({}, state, nextState);
  default:
    return state;
  }
}


const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
});

export default rootReducer;
