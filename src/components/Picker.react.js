import React, {Component, PropTypes} from 'react';

export default class Picker extends Component {

  render() {
    const {onChange, options, value} = this.props;
    const redditOptions = options.map( option => {
      return <option key={option} value={option}>{option}</option>;
    });

    return (
      <span>
          <h1>{value}</h1>
          <select onChange={e => onChange(e.target.value)}>
            {redditOptions}
          </select>
      </span>
    );
  }
}

Picker.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired
};
