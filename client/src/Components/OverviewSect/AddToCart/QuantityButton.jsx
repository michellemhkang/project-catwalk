import React from 'react';
import styling from './Buttons.module.css';

class QuantityButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(quantity) {
        this.props.changeQuantity(quantity);
    }
    render() {

        return (
            <div className={styling.quantityOptionsList}>
                <div>
                    <button className={styling.button} onClick={() => this.handleClick(this.props.quantity)}>{this.props.quantity}</button>
                </div>
            </div>
        )
    }
}

export default QuantityButton;