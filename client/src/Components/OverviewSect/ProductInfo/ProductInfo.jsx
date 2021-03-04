import React from 'react';  
import styling from './ProductInfo.module.css';
// import Price from '../StyleSelector/Price.jsx';

class ProductInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.productInfo.category,
            expandedName: this.props.productInfo.name,
        }
    }

    // Stars: Create StarRating Component that makes a request to get all the ratings
    // Reviews: Simple Hyperlink to Reviews Section

    render() {
        return (
            <div>
                <h3 className={styling.category}>{(this.state.category).toUpperCase()}</h3>
                <h1 className={styling.name}>{this.state.expandedName}</h1>
            </div>
        )
    }
}

export default ProductInfo;