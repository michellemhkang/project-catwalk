import React from 'react';
import styling from './ProductInfo.module.css';

const Price = ({defaultPrice, salePrice}) => {
    if (salePrice) {
        return (
            <div>
                <p className={styling.strikethrough}>${defaultPrice}</p>
                <p className={styling.salePrice}>${salePrice}</p>
            </div>
        )
    }
    return (
        <p>${defaultPrice}</p>
    )
}

export default Price;