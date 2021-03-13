import React from 'react';
import styling from './Buttons.module.css';
import axios from 'axios';
import FavoriteButton from './FavoriteButton.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
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

    selectSku(sku){
        console.log(sku);
        this.setState({selectedSku: sku})
    }

    selectQuantity(quantity) {
        console.log(quantity);
        this.setState({selectedQuantity: quantity})
    }

    handleClick() {
        // clearTimeout(timeout);
        // event.stopPropagation();
        this.postToCart(this.state.selectedSku);
        this.setState({
            clicked: true
        })
        // let timeout = setTimeout(this.setState({clicked: false}), 5000);
    }

    postToCart(sku_id) {
        axios.post('/cart', { sku_id: sku_id })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                // console.log('HELLO????');
                console.log(error);
            })
    }

    render() {

        const { clicked } = this.state;

        return (

            <div className={styling.buttonContainer}>

            {/* <div className={styling.colContainer}> */}

                <div className={styling.row1Container}>
                    {/* <div className={styling.colContainer}></div> */}
                    <SizeSelector skus={this.props.skus} selectSku={this.selectSku} selectQuantity={this.selectQuantity} />
                    <QuantitySelector quantityAvailable={this.state.selectedQuantity} />

                {/* <div className={styling.rowContainer}> */}
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