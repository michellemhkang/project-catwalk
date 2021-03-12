import React from 'react';
import QuantityButton from './QuantityButton.jsx';
import styling from './Buttons.module.css';
import AddToCart from './AddToCart.jsx';

class QuantitySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            selectedQuantity: null
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }

    changeQuantity(quantity) {
        this.setState({selectedQuantity: quantity});
    }

    render() {

        const {selectedSku, quantityAvailable} = this.props;
        const {showMenu, selectedQuantity} = this.state;

        // we want the quantity for whose size is equal to props selected size
        // let quantityOptions = Object.entries(skus).filter((pair, index) => {
        //     // let filteredQuantity = pair[1].quantity;
        //     // return <button>{filteredQuantity}</button>
        //     if (pair[1].size === selectedSize) {
        //         console.log(pair[1].size);
        //         return <button>{pair[1].quantity}</button>
        //         // return <QuantityButton changeQuantity={this.changeQuantity} quantity={pair[1].quantity} key={index} />
        //     }
        // })

        // let quantityOptions = Object.entries(skus).filter((pair, index) => {
        //     if ()
        // })

        // let quantityOptions = [];
        //     let maximum = selectedSku[1].quantity <= 15 ? selectedSku[1].quantity : 15;
        //     for (let i = 0; i <= maximum; i++) {
        //         return <QuantityButton changeQuantity={this.changeQuantity} quantity={i} />
        //     }

        // if (selectedQuantity === '-') {
        //     console.log('i here');
        // console.log(selectedSku);

        // let quantity = selectedSku[1].quantity
        let isAtMax = quantityAvailable <= 15;
        let maximum = isAtMax ? quantityAvailable : 15;
        let quantityOptions = [...Array(maximum)].map((quantity, i) => {
            // console.log(i);
            return <QuantityButton changeQuantity={this.changeQuantity} quantity={i + 1} key={i} />
        })

        // const defaultDisplay = className={'far fa-window-minimize'};
        // const displayQuantity = selectedQuantity === null ? defaultDisplay: selectedQuantity


        return (
            <div>
                <div>
                    <button className={styling.button} onClick={this.showMenu}>
                        {
                            selectedQuantity === null
                            ? (
                                <div>
                                    <i className={'fas fa-minus'} />
                                    <i className={'fas fa-angle-down fa-fw'} />
                                </div>
                            )
                            : (
                                <div>
                                    {selectedQuantity}
                                    <i className={'fas fa-angle-down fa-fw'} />
                                </div>
                            )
                        }
                        {/* {displayQuantity} */}
                        {/* <i className={'fas fa-angle-down fa-fw'} /> */}
                    </button>
                {
                    showMenu
                    ? (
                        <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                            {/* <QuantityButton quantityOptions={selectedSku.quantity} /> */}
                            {quantityOptions}
                            {/* <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button> */}
                        </div>
                    )
                    : (
                        null
                    )
                }
                </div>
                <AddToCart selectedSku={selectedSku} quantity={this.state.selectedQuantity} />
            </div>
        )
    }
}

export default QuantitySelector;