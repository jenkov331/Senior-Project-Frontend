import React from 'react';
import conversions from './conversions.json';
import './Converter.css';
class Converter extends React.Component {
  constructor(props) {
    super(props);
    let conversionTypes = Object.keys(conversions);
    let conversionType = conversionTypes[0];
    let unitBeforeConversion = Object.keys(conversions[conversionType])[0];
    let unitAfterConversion = Object.keys(conversions[conversionType][unitBeforeConversion])[0];
    let conversionMultiplier = conversions[conversionType][unitBeforeConversion][unitAfterConversion];

    this.state = {
      conversionType,
      valueBeforeConversion: 1,
      unitBeforeConversion,
      valueAfterConversion: 0,
      unitAfterConversion,
      conversionMultiplier,
      item: ""
    };
  }

  componentDidMount() {
    this.calculateConversion({ target: { value: 1 } });
    fetch('http://localhost:56290/api/Home', {
      method: 'GET',
      mode: 'no-cors'
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log('Request failed', error)
      });
  }

  changeConversionType = (event) => {
    this.state.item.then((value) => console.log("HERE", value));
    console.log(this.state.item);
    console.log(this.state.item.status);
    console.log(this.state.item.statusText);
    let conversionType = event.target.value;
    let unitBeforeConversion = Object.keys(conversions[conversionType])[0];
    let unitAfterConversion = Object.keys(conversions[conversionType][unitBeforeConversion])[0];
    let conversionMultiplier = conversions[conversionType][unitBeforeConversion][unitAfterConversion];
    let valueAfterConversion;
    if (conversionType === 'Temperature') {
      valueAfterConversion = 5 / 9 * (this.state.valueBeforeConversion - 32);
    }
    else {
      valueAfterConversion = conversionMultiplier * this.state.valueBeforeConversion;
    }
    this.setState({
      conversionType,
      unitBeforeConversion,
      unitAfterConversion,
      conversionMultiplier,
      valueAfterConversion
    })
  }

  changeUnitBefore = (event) => {
    let unitBeforeConversion = event.target.value;
    let unitAfterConversion = this.state.unitAfterConversion;
    if (unitBeforeConversion === this.state.unitAfterConversion) {
      unitAfterConversion = this.state.unitBeforeConversion;
    }
    let conversionMultiplier = conversions[this.state.conversionType][unitBeforeConversion][unitAfterConversion];
    let valueAfterConversion;
    if (this.state.conversionType === 'Temperature') {
      valueAfterConversion = 5 / 9 * (this.state.valueBeforeConversion - 32);
    }
    else {
      valueAfterConversion = conversionMultiplier * this.state.valueBeforeConversion;
    }
    this.setState({
      unitBeforeConversion,
      unitAfterConversion,
      conversionMultiplier,
      valueAfterConversion
    })
  }

  changeUnitAfter = (event) => {
    let unitAfterConversion = event.target.value;
    let conversionMultiplier = conversions[this.state.conversionType][this.state.unitBeforeConversion][unitAfterConversion];
    let valueAfterConversion;
    if (this.state.conversionType === 'Temperature') {
      valueAfterConversion = (5 / 9) * (this.state.valueBeforeConversion - 32);
    }
    else {
      valueAfterConversion = conversionMultiplier * this.state.valueBeforeConversion;
    }
    this.setState({
      unitAfterConversion,
      conversionMultiplier,
      valueAfterConversion
    })
  }

  calculateConversion = (event) => {
    let valueBeforeConversion = event.target.value;
    let valueAfterConversion;
    if (this.state.conversionType === 'Temperature') {
      valueAfterConversion = (5 / 9) * (valueBeforeConversion - 32);
    }
    else {
      valueAfterConversion = this.state.conversionMultiplier * valueBeforeConversion;
    }
    this.setState({
      valueBeforeConversion,
      valueAfterConversion
    })
  }

  calculateConversionReverse = (event) => {
    let valueAfterConversion = event.target.value;
    let valueBeforeConversion = valueAfterConversion / this.state.conversionMultiplier;
    if (this.state.conversionType === 'Temperature') {
      valueBeforeConversion = (9 / 5) * valueAfterConversion + 32;
    }
    else {
      valueBeforeConversion = valueAfterConversion / this.state.conversionMultiplier;
    }
    this.setState({
      valueBeforeConversion,
      valueAfterConversion
    })
  }

  render() {
    let conversionTypeOptions = Object.keys(conversions).map((type) => {
      return <option value={type} key={type}>{type}</option>
    });

    let unitBeforeOptions = Object.keys(conversions[this.state.conversionType]).map((unitBefore) => {
      return <option value={unitBefore} key={unitBefore}>{unitBefore}</option>
    });

    let unitAfterOptions = Object.keys(conversions[this.state.conversionType][this.state.unitBeforeConversion]).map((unitAfter) => {
      return <option value={unitAfter} key={unitAfter}>{unitAfter}</option>
    });

    return (
      <div className="converter">
        <div>
          <select
            value={this.state.conversionType}
            onChange={this.changeConversionType}
            className="type-dropdown">
            {conversionTypeOptions}
          </select>
        </div>
        <div>
          <input
            type="text"
            value={this.state.valueBeforeConversion}
            onChange={this.calculateConversion} />
          <select
            value={this.state.unitBeforeConversion}
            onChange={this.changeUnitBefore}>
            {unitBeforeOptions}
          </select>
        </div>
        <p>=</p>
        <div>
          <input
            type="text"
            value={this.state.valueAfterConversion}
            onChange={this.calculateConversionReverse} />
          <select
            value={this.state.unitAfterConversion}
            onChange={this.changeUnitAfter}>
            {unitAfterOptions}
          </select>
        </div>
      </div>
    );
  }
}
export default Converter;
