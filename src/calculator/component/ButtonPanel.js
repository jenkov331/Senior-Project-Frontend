import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';
import '../css/ButtonPanel.css';

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button miniature={this.props.miniature} name="AC" isActive={this.props.latestKey==="AC"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="+/-" isActive={this.props.latestKey==="+/-"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="%" isActive={this.props.latestKey==="%"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="÷" isActive={this.props.latestKey==="÷" || this.props.latestKey==="/"} clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button miniature={this.props.miniature} name="7" isActive={this.props.latestKey==="7"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="8" isActive={this.props.latestKey==="8"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="9" isActive={this.props.latestKey==="9"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="x" isActive={this.props.latestKey==="x" || this.props.latestKey==="*"} clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button miniature={this.props.miniature} name="4" isActive={this.props.latestKey==="4"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="5" isActive={this.props.latestKey==="5"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="6" isActive={this.props.latestKey==="6"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="-" isActive={this.props.latestKey==="-"} clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button miniature={this.props.miniature} name="1" isActive={this.props.latestKey==="1"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="2" isActive={this.props.latestKey==="2"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="3" isActive={this.props.latestKey==="3"} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="+" isActive={this.props.latestKey==="+"} clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button miniature={this.props.miniature} name="0" isActive={this.props.latestKey==="0"} clickHandler={this.handleClick} wide />
          <Button miniature={this.props.miniature} name="." isActive={this.props.latestKey==="."} clickHandler={this.handleClick} />
          <Button miniature={this.props.miniature} name="=" isActive={this.props.latestKey==="=" || this.props.latestKey==="Enter"} clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
  latestKey: PropTypes.string,
  miniature: PropTypes.bool
};
export default ButtonPanel;
