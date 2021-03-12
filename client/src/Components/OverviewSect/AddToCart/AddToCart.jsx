import React from 'react';
import styling from './Buttons.module.css';
import axios from 'axios';

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
        this.postToCart = this.postToCart.bind(this);
    }

    handleClick() {
        this.postToCart(this.props.selectedSku);
    }

    postToCart(sku_id) {
        axios.post('/cart', {sku_id: sku_id})
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            // console.log('HELLO????');
            console.log(error);
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} className={styling.button}>Add to Cart</button>
        )
    }
}

export default AddToCart;