import React from 'react';

class SizeSelector extends React.Component {
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

        let sizeOptions = Object.entries(skus).map((pair, index) => {
            return <button key={index}>{pair[1].size}</button>
        })

        return (
            <div>
                <button onClick={this.showMenu}>
                    Size Selector
                </button>

            {
                this.state.showMenu
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
        )
    }
}

export default SizeSelector;