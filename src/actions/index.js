import fetch from 'isomorphic-fetch';

// export, to be consumed by others, that's what you do here.
import { SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './enum';

export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit
  };
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  };
}

/**
 * Request posts
 * @param reddit
 * @returns {{type: REQUEST_POSTS, data: *}}
 */
export function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  };
}

/**
 * #Caller: Server response
 * triggers to receive posts.
 * @param reddit
 * @param json
 * @returns {{type: RECEIVE_POSTS, reddit: *, posts: *, receivedAt: number}}
 */
export function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}


function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
}

/**
 * Thunk
 * @param reddit
 * @returns {Function}
 */
export function fetchPosts(reddit) {
  return (dispatch) => {
    dispatch(requestPosts(reddit));
    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(response =>response.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  };
}


/**
 * Thunk
 * @param reddit
 * @returns {Function}
 */
export function fetchPostIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit));
    }
  };
}

