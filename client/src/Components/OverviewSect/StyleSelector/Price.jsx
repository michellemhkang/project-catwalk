import React from 'react';
import styling from './Styles.module.css';

const Price = ({defaultPrice, salePrice}) => {
    if (salePrice !== null) {
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