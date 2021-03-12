import React from 'react';
import SizeButton from './SizeButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import styling from './Buttons.module.css';

class SizeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            currentlySelectedSize: 'Select Size'
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.changeSelectedSize = this.changeSelectedSize.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(e) {
        e.preventDefault();
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }

    changeSelectedSize(size) {
        this.setState({currentlySelectedSize: size})
        // this.closeMenu();
    }

    render() {

        const {showMenu, currentlySelectedSize} = this.state;
        const {skus} = this.props;

        // let sizeArr = [];
        // for (var key in skus) {
        //     sizeArr.push(key.size);
        //     console.log(skus);
        //     console.log(key);
        //     console.log(key.size);
        //     // console.log(sku);
        // }

        // let sizeOptions = sizeArr.map((eachSize, index) => {
        //     return <button key={index}>{eachSize}</button>
        // })

        // let sizeOptions = skusArr.map((oneSku, index) => {
        //     return <button size={oneSku.size} key={index}>{oneSku.quantity}</button>
        // })

        // let array = Object.entries(skus).map((pair, index) => {
        //     return <button key={index}>{sku.size}</button>
        //     // return value = this.props.skus.sku
        // })

        // let array = [];
        // Object.entries(skus).map((pair) => {
        //     console.log(pair);
        //     // array.push(pair);
        //     // console.log(array);
        // })

        // let sizeOptions = array.map((sku, index) => {
        //     return <button key={index}>{sku[1]}</button>
        // })

        // here, pair is another array where index 0 is the sku number (key)
        // and index 1 is an object of size and quantity (property)
        let sizeOptions = Object.entries(skus).map((pair, index) => {
            return <SizeButton className={styling.button} changeSelectedSize={this.changeSelectedSize} size={pair[1].size} key={index} />
        })

        let selectedSku;
        let quantityAvailable;
        if (currentlySelectedSize !== 'Select Size') {
            Object.entries(skus).filter((sku) => {
                if (sku[1].size === currentlySelectedSize) {
                    selectedSku = sku[0];
                    quantityAvailable = sku[1].quantity;
                    // console.log(selectedSku);
                }
            })
        }


        return (
            <div className={styling.rowContainer}>
                <div>
                    <button className={styling.sizeButton} onClick={this.showMenu}>
                        {currentlySelectedSize}
                        <i className={'fas fa-angle-down fa-fw'}></i>
                    </button>

                {
                    showMenu
                    ? (
                        <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                            {sizeOptions}
                            {/* <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button> */}
                        </div>
                    )
                    : (
                        null
                    )
                }
                </div>
                <QuantitySelector selectedSku={selectedSku} quantity={quantityAvailable} />
            </div>
        )
    }
}

export default SizeSelector;