import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/*components*/
import Picker from '../components/Picker.react';

class App extends Component {

    handleChange(nextReddit) {
        console.log(this.props);
        console.log(this.props.dispatch({type: 'SELECT_REDDIT', data: nextReddit}));
    }

    render() {
        const {dispatch, selectedReddit} = this.props;
        return (
            <div>
                <Picker
                    onChange={(nextReddit)=>this.handleChange(nextReddit)}
                    options={['reactjs', 'frontend']}
                    value={selectedReddit} />
            </div>
        );
    }
}

App.PropTypes = {
    selectedReddit: PropTypes.string.isRequired
};


/*
    #You will be come here frequently#
    This is the place where you can filter/massage/maintain
    the final state returned from reducer, after an action.
 */
function states(state) {
    return {
        selectedReddit: 'reactjs'
    };
}

export default connect(states)(App);