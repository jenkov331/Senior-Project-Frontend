import React from 'react';
import Display from './Display';      
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../css/Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
      viewValue: '0',
      latestKey: null
    };
  }

  handleClick = (buttonName) => {
    this.setState({ latestKey: buttonName });
    let temp = calculate(this.state, buttonName);
    temp.viewValue = (temp.next === undefined ? this.state.next : temp.next) ||
      (temp.total === undefined ? this.state.total : temp.total) || '0';
    this.setState(temp);
  }

  handleFinishEdit = () => {
      this.handleClick('=');
      this.forceUpdate(()=>{
      this.setState({ viewValue: this.state.next || this.state.total || '0' });
    });
  }

  handleStartEdit = () => {
    //this.setState({ viewValue: '' });
  }

  handleChange = (value) => {
    this.handleClick(value);

    this.forceUpdate(() => {
      this.setState({
        viewValue: this.state.next || this.state.total || '0',
        latestKey: value
      });
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          value={this.state.viewValue}
          changeHandler={this.handleChange}
          handleEnterField={this.handleStartEdit}
          handleLeaveField={this.handleFinishEdit}
          miniature={this.props.miniature}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
          latestKey={this.state.latestKey}
          miniature={this.props.miniature}
        />
      </div>
    );
  }
}
export default Calculator;
