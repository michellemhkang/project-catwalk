import React from 'react';
import styling from './Buttons.module.css';

class SizeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            currentlySelectedSize: 'SELECT SIZE'
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e) {
        e.preventDefault();
        // if (!this.dropdownMenu.contains(e.target)) {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
        // }
    }

    handleClick(size, sku, quantity) {
        this.setState({ currentlySelectedSize: size });
        this.props.selectSku(sku);
        this.props.selectQuantity(quantity);
    }

    render() {

        const { showMenu, currentlySelectedSize } = this.state;
        const { skus } = this.props;

        // here, pair is another array where index 0 is the sku number (key)
        // and index 1 is an object of size and quantity (property)
        let sizeOptions = Object.entries(skus).map((pair, index) => {
            return <button onClick={() => this.handleClick(pair[1].size, pair[0], pair[1].quantity)} className={styling.sizeOption} key={index}>{pair[1].size}</button>
        })

        let selectedSku;
        let quantityAvailable;
        if (currentlySelectedSize !== 'SELECT SIZE') {
            Object.entries(skus).filter((sku) => {
                if (sku[1].size === currentlySelectedSize) {
                    selectedSku = sku[0];
                    quantityAvailable = sku[1].quantity;
                }
            })
        }

        return (

            <div className={styling.sizeOptionsList} >

                <div >
                    <button className={styling.sizeButton} onClick={this.showMenu}>
                        {currentlySelectedSize}
                        <i className={'fas fa-angle-down fa-fw'} />
                    </button>
                </div>

                <div >
                    {showMenu ? (
                        // ref={(element) => { this.dropdownMenu = element; }}
                        <div className={styling.sizeDropdown}>
                            {sizeOptions}
                        </div>
                    ) : (
                        null
                    )}
                </div>

            </div>

        )
    }
}

export default SizeSelector;