import React from 'react';

class QuantitySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu() {

        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Quantity Selector
                </button>


            {
                this.state.showMenu
                ? (
                    <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>    
                )
                : (
                    null
                )
            }
            </div>
        )
    }
}

export default QuantitySelector;