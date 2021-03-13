import React from 'react';
import styling from './Buttons.module.css';
import axios from 'axios';
import FavoriteButton from './FavoriteButton.jsx';

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.postToCart = this.postToCart.bind(this);
    }

    handleClick() {
        // clearTimeout(timeout);
        // event.stopPropagation();
        this.postToCart(this.props.selectedSku);
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

                <div>
                    <FavoriteButton />
                </div>

            </div>
        )
    }
}

export default AddToCart;