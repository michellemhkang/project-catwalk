import React from 'react';
import Styles from './Styles.jsx';
import Price from './Price.jsx';
import axios from 'axios';

// Props being passed here: Array of objects of styles for this product
class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleInfo: this.props.productStyles,
            // because first is default
            selectedStyleInfo: this.props.productStyles[0],
            // this is an object to pass up data to app
            selectedStyleName: this.props.productStyles[0].name,
            selectedStyleId: this.props.productStyles[0].id,
            selectedStyleDefaultPrice: this.props.productStyles[0].original_price,
            selectedStyleSalePrice: null,
            selectedStyleThumbnail: this.props.productStyles[0].photos[0].thumbnail_url,
            selectedStylePhoto: this.props.productStyles[0].photos[0].url
        }
        // this.baseState = this.state;
        this.changeStyle = this.changeStyle.bind(this);
        this.getStyles = this.getStyles.bind(this);
    }

    changeStyle(style) {
        this.setState({
            selectedStyleName: style
        })
        for (var i = 0; i < this.props.productStyles.length; i++) {
            if (this.props.productStyles[i].name === this.state.selectedStyleName) {
                // console.log(this.props.productStyles[i].name)
                this.setState({
                    selectedStyleInfo: this.props.productStyles[i],
                    selectedStyleId: this.props.productStyles[i].id,
                    selectedStyleDefaultPrice: this.props.productStyles[i].original_price,
                    selectedStyleThumbnail: this.props.productStyles[i].photos[0].thumbnail_url,
                    selectedStylePhoto: this.props.productStyles[i].photos[0].url
                })
                if (this.props.productStyles[i].sale_price) {
                    this.setState({selectedStyleSalePrice: this.props.productStyles[i].sale_price})
                }
            }
        }
        this.props.getSelectedStyle(this.state.selectedStyleInfo);
        // this.setState({selectedStyleSalePrice: null})
    }

    // reset = () => {
    //     this.setState(this.baseState);
    // }

    render() {
        // console.log('props:', this.props.productStyles);
        const stylesInfo = this.props.productStyles.map((style, index) => {
            // console.log('style:', style);
            return <Styles name={style.name} photos={style.photos} id={style.style_id} key={index} changeStyle={this.changeStyle} getStyles={this.getStyles} /> 
        })

        return (
            <div>
                <Price defaultPrice={this.state.selectedStyleDefaultPrice} salePrice={this.state.selectedStyleSalePrice} />
                <h3>Style: {this.state.selectedStyleName}</h3>
                <div>{stylesInfo}</div>
            </div>
        )
    }

}

export default StyleSelector;