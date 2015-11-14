import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';


/* components*/
import Picker from '../components/Picker.react.js';
import Posts from '../components/Posts.react.js';

import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';


/* actions*/
import {selectReddit, fetchPostIfNeeded, invalidateReddit} from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._handleRefreshClick = this._handleRefreshClick.bind(this);
  }

  /**
   * After component mounted (first time)
   */
  componentDidMount() {
    const { dispatch, selectedReddit } = this.props;
    dispatch(fetchPostIfNeeded(selectedReddit));
  }

  /**
   * After component mounted (second-n time)
   */
  componentWillReceiveProps(nextProps) {
    const { dispatch, selectedReddit } = nextProps;
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      dispatch(fetchPostIfNeeded(selectedReddit));
    }
  }

  _handleChange(nextReddit) {
    const {dispatch} = this.props;
    dispatch(selectReddit(nextReddit));
  }

  _handleRefreshClick(nextReddit) {
    const {dispatch} = this.props;
    dispatch(invalidateReddit(nextReddit));
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;

    const containerStyle = {
      backgroundColor: '#00bcd4',
      width: '100%',
      height: '64',
      position: 'fixed'
    };

    return (

      <div>
        <Paper zDepth={0} rounded={false} circle={false} style={containerStyle} />

        <Picker
          value={selectedReddit}
          onChange={this._handleChange}
          options={['reactjs', 'frontend']}/>

        <div>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
              <RaisedButton primary label="Refresh" onTouchTap={this._handleRefreshClick}/>
            </span>
          }
          {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
          }
          {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
          }
          {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts}/>
          </div>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: PropTypes.array.isRequired,
  selectedReddit: PropTypes.string.isRequired
};


/*
 #You will be come here frequently#
 This is the place where you can filter/massage/maintain
 the final state returned from reducer, after an action.
 */
const mapStateToProps = (state) => {
  const { selectedReddit, postsByReddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    postsByReddit,
    isFetching,
    lastUpdated,
    posts
  };
};


export default connect(mapStateToProps)(App);
