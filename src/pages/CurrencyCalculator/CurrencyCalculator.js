import React from 'react';
import CurrencyInput from './CurrencyInput';

/**
 * // The CurrencyCalculator component manages currency conversion between Euro and Dollar.
 * // It stores the current currency and value in its state and displays two synchronized input fields.
 * // Changing one input updates the other accordingly.
 */
class CurrencyCalculator extends React.Component {
    // Constructor initializes the state and binds the event handler methods.
    constructor(props) {
        super(props);
        this.state = {currency: 'Euro', value: ''};
        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.handleDollarChange = this.handleDollarChange.bind(this);
    }

    // Called when the Dollar value changes.
    // Sets the currency to Dollar and updates the value in the state.
    handleDollarChange(value) {
        this.setState({currency: 'Dollar', value});
    }

    // Called when the Euro value changes.
    // Sets the currency to Euro and updates the value in the state.
    handleEuroChange(value) {
        this.setState({currency: 'Euro', value});
    }

    // Renders the two synchronized input fields for Euro and Dollar.
    // Converts the values depending on the selected currency.
    render() {
        const value = this.state.value;
        const currency = this.state.currency
        let euro = 0;
        let dollar = 0;
        if (currency === 'Euro') {
            euro = value;
            dollar = 1.13 * value;
        } else {
            dollar = value;
            euro = 0.88 * value;
        }
        return (
            <div>
                <CurrencyInput currency="Euro" value={euro} onCurrencyChange={this.handleEuroChange}/>
                <CurrencyInput currency="Dollar" value={dollar} onCurrencyChange={this.handleDollarChange}/>
                <h1>Currency1: {this.props.currency1}</h1>
                <h1>Currency2: {this.props.currency2}</h1>
            </div>
        );
    }
}

export default CurrencyCalculator;