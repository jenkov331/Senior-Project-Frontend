import React from 'react';
import PropTypes from 'prop-types';
import '../css/Display.css';

class Display extends React.Component {
  handleChange = (event) => {
    //Intentiaonally blank. HandleKeyPress handles the change now.
  }

  handleEnterField = () => {
    this.props.handleEnterField();
  }

  handleLeaveField = () => {
    this.props.handleLeaveField();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleLeaveField();
    }
    else if(event.key.length === 1){
      this.props.changeHandler(event.key);
    }
  }

  render() {
    return (
      <div className="calculator-display">
        <input
        className={this.props.miniature ? 'mini' : ''}
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onBlur={this.handleLeaveField}
          onFocus={this.handleEnterField}
          onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
  handleEnterField: PropTypes.func,
  handleLeaveField: PropTypes.func,
  miniature: PropTypes.bool
};
export default Display;
