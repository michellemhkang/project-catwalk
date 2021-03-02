import React from 'react';  

class ProductInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.productInfo.category,
            expandedName: this.props.productInfo.name,
            defaultPrice: this.props.productInfo.default_price
        }
    }

    // Stars: Create StarRating Component that makes a request to get all the ratings
    // Reviews: Simple Hyperlink to Reviews Section

    render() {
        return (
            <div>
                <h3>{(this.state.category).toUpperCase()}</h3>
                <h1>{this.state.expandedName}</h1>
                <h4>${this.state.defaultPrice}</h4>
            </div>
        )
    }
}

export default ProductInfo;