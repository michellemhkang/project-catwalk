import React from 'react';
import axios from 'axios';
import styling from './Buttons.module.css';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import FavoriteButton from './FavoriteButton.jsx';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            selectedSku: null,
            selectedQuantity: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.postToCart = this.postToCart.bind(this);
        this.selectSku = this.selectSku.bind(this);
        this.selectQuantity = this.selectQuantity.bind(this);
    }

    selectSku(sku) {
        this.setState({ selectedSku: sku })
    }

    selectQuantity(quantity) {
        this.setState({ selectedQuantity: quantity })
    }

    handleClick() {
        this.postToCart(this.state.selectedSku);
        this.setState({ clicked: true })
    }

    postToCart(sku_id) {
        axios.post('/cart', { sku_id: sku_id })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        const { skus } = this.props;
        const { clicked, selectedSku, selectedQuantity } = this.state;

        return (

            <div className={styling.buttonContainer}>

                <div className={styling.row1Container}>
                    <SizeSelector skus={skus} selectSku={this.selectSku} selectQuantity={this.selectQuantity} />
                    <QuantitySelector quantityAvailable={selectedQuantity} />
                </div>

                <div className={styling.row2Container}>
                    <div>
                        <button onClick={this.handleClick} className={styling.addButton}>
                            {clicked ? (
                                <div>
                                    <span>ADDED TO BAG</span>
                                    <i className={'fas fa-check fa-fw'} />
                                </div>
                            ) : (
                                <div>
                                    <span>ADD TO BAG</span>
                                    <i className={'fas fa-plus fa-fw'} />
                                </div>
                            )}
                        </button>
                    </div>
                    <FavoriteButton />
                </div>

            </div>
        )
    }
}

export default AddToCart;