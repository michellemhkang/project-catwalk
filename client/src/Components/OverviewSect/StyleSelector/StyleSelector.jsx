import React from 'react';
import Styles from './Styles.jsx';
import Price from './Price.jsx';

// Props being passed here: Array of objects of styles for this product
class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStyle: this.props.productStyles[0].name,
            // because first is default
            defaultPrice: this.props.productStyles[0].original_price,
            salePrice: null
        }
        // this.baseState = this.state;
        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(style) {
        this.setState({
            selectedStyle: style
        })
        for (var i = 0; i < this.props.productStyles.length; i++) {
            if (this.props.productStyles[i].name === this.state.selectedStyle) {
                // console.log(this.props.productStyles[i].name)
                if (this.props.productStyles[i].sale_price) {
                    this.setState({salePrice: this.props.productStyles[i].sale_price})
                }
            }
        }
        // this.setState({salePrice: null})
    }

    reset = () => {
        this.setState(this.baseState);
    }

    render() {
        // console.log('props:', this.props.productStyles);
        const stylesInfo = this.props.productStyles.map((style, index) => {
            // console.log('style:', style);
            return <Styles name={style.name} photos={style.photos} id={style.style_id} key={index} changeStyle={this.changeStyle} /> 
        })

        return (
            <div>
                <Price defaultPrice={this.state.defaultPrice} salePrice={this.state.salePrice} />
                <h3>Style: {this.state.selectedStyle}</h3>
                <div>{stylesInfo}</div>
            </div>
        )
    }

}

export default StyleSelector;