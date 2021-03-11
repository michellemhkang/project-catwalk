import React from 'react';

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
            <button onClick={() => this.handleClick(this.props.quantity)}>{this.props.quantity}</button>
        )
    }
}

export default QuantityButton;