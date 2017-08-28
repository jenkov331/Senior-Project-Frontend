import React from 'react';
import {
    ButtonToolbar,
    OverlayTrigger,
    Popover,
} from 'react-bootstrap'
import Calculator from '../calculator/component/Calculator.js'
import Converter from '../converter/Converter.js'
import calculatorIcon from '../images/calculator-icon.gif'
import unitConverterIcon from '../images/unit-converter-icon.jpg'
import './ButtonBar.css';

class ButtonBar extends React.Component {
    CalculatorPopover = (
        <Popover id="calculator-popover" title="Calculator">
            <Calculator miniature={true} />
        </Popover>
    )

    ConverterPopover = (
        <Popover id="converter-popover" title="Converter">
            <Converter />
        </Popover>
    )

    render() {
        return (
            <div className="header-button-bar">
                <ButtonToolbar>
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.CalculatorPopover}>
                        <img src={calculatorIcon} className="icon" alt="Calculator" />
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={this.ConverterPopover}>
                        <img src={unitConverterIcon} className="icon" alt="UnitConverter" />
                    </OverlayTrigger>
                </ButtonToolbar>
            </div>
        );
    }
}
export default ButtonBar;
