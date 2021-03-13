import React from 'react';
import styling from './Buttons.module.css';

class QuantitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            selectedQuantity: null
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

    handleClick(quantity) {
        this.setState({ selectedQuantity: quantity });
    }

    render() {

        const { selectedSku, quantityAvailable } = this.props;
        const { showMenu, selectedQuantity } = this.state;

        let isAtMax = quantityAvailable <= 15;
        let maximum = isAtMax ? quantityAvailable : 15;
        let quantityOptions = [...Array(maximum)].map((quantity, i) => {
            return <button quantity={i + 1} onClick={() => this.handleClick(i + 1)} className={styling.quantityOption} key={i}>{i + 1}</button>
        })

        return (

            <div className={styling.row1Container}>

                <div className={styling.quantityOptionsList}>

                    <div>
                        <button className={styling.quantityButton} onClick={this.showMenu}>
                            {selectedQuantity === null ? (
                                <div>
                                    <i className={'fas fa-minus fa-fw'} />
                                    <i className={'fas fa-angle-down fa-fw'} />
                                </div>
                            ) : (
                                <div>
                                    {selectedQuantity}
                                    <i className={'fas fa-angle-down fa-fw'} />
                                </div>
                            )}
                        </button>
                    </div>

                    <div>
                        {showMenu ? (
                            <div className={styling.quantityDropdown} >
                                {quantityOptions}
                            </div>
                        ) : (
                            null
                        )}
                    </div>

                </div>

            </div>
        )
    }
}

export default QuantitySelector;