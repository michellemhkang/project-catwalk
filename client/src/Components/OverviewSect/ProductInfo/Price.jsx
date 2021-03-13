import React from 'react';
import styling from './ProductInfo.module.css';

const Price = ({defaultPrice, salePrice}) => {

    if (salePrice) {
        return (
            <div>
                <span className={styling.defaultStrikethrough}>${defaultPrice}</span>
                <span className={styling.salePrice}>        ${salePrice}</span>
            </div>
        )
    }
    return (
        <p className={styling.defaultPrice}>${defaultPrice}</p>
    )
}

export default Price;