import React from 'react';
import Styles from './Styles.jsx';
import styling from './Styles.module.css';
// import Price from './Price.jsx';
// import axios from 'axios';

// Props being passed here: Array of objects of styles for this product
class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // styleInfo: this.props.productStyles,
            // // because first is default
            // selectedStyleInfo: this.props.productStyles[0],
            // // this is an object to pass up data to app
            // selectedStyleName: this.props.productStyles[0].name,
            // selectedStyleId: this.props.productStyles[0].id,
            // selectedStyleDefaultPrice: this.props.productStyles[0].original_price,
            // selectedStyleSalePrice: null,
            // selectedStyleThumbnail: this.props.productStyles[0].photos[0].thumbnail_url,
            // selectedStylePhoto: this.props.productStyles[0].photos[0].url
            // styleInfo: {},
            // selectedStyleInfo: {},
            selectedStyleName: this.props.styles[0].name,
            // selectedStyleId: null
            // selectedStyleDefaultPrice: null,
            // selectedStyleSalePrice: null,
            // selectedStyleThumbnail: '',
            // selectedStylePhoto: ''
        }
        // this.baseState = this.state;
        this.changeStyle = this.changeStyle.bind(this);
    }

    // need selected style name here to display
    // need id to invoke set style in overview sect

    changeStyle(styleId, styleName) {
        this.props.setSelectedStyle(styleId);
        // this.props.getSelectedStyle(this.state.selectedStyleInfo);
        this.setState({
            selectedStyleName: styleName
        })
        // for (var i = 0; i < this.props.styles.length; i++) {
        //     if (this.props.styles[i].name === this.state.selectedStyleName) {
        //         // console.log(this.props.styles[i].name)
        //         this.setState({
        //             selectedStyleInfo: this.props.styles[i],
        //             selectedStyleId: this.props.styles[i].id,
        //             selectedStyleDefaultPrice: this.props.styles[i].original_price,
        //             selectedStyleThumbnail: this.props.styles[i].photos[0].thumbnail_url,
        //             selectedStylePhoto: this.props.styles[i].photos[0].url
        //         })
        //         if (this.props.styles[i].sale_price) {
        //             this.setState({selectedStyleSalePrice: this.props.styles[i].sale_price})
        //         }
        //     }
        // }
        // this.setState({selectedStyleSalePrice: null})
    }

    // reset = () => {
    //     this.setState(this.baseState);
    // }

    render() {
        // console.log('props:', this.props.styles);
        const stylesInfo = this.props.styles.map((style, index) => {
            // console.log('style:', style);
            return <Styles selectedStyleName={this.state.selectedStyleName} name={style.name} photos={style.photos} id={style.style_id} key={index} changeStyle={this.changeStyle} />
        })

        return (
            <div>
                {/* <Price defaultPrice={this.props.defaultPrice} salePrice={this.state.selectedStyleSalePrice} /> */}
                <h3 className={styling.styleName}>Style &gt; {this.state.selectedStyleName}</h3>
                {/* <div className={styling.thumbnails}>
                    <div>
                        {stylesInfo}
                    </div>
                </div> */}
                <div className={styling.thumbnailContainer}>{stylesInfo}</div>
            </div>
        )
    }

}

export default StyleSelector;