import React from 'react';
import styling from './Buttons.module.css';

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <button className={styling.button}>Add to Cart</button>
        )
    }
}

export default AddToCart;