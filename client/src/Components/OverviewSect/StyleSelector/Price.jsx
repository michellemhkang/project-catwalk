import React from 'react';
import styling from './Thumbnails.module.css';

const Price = ({defaultPrice, salePrice}) => {
    if (salePrice !== null) {
        return (
            <div>
                <p className="defaultPrice" className={styling.strikethrough}>${defaultPrice}</p>
                <p className="salePrice" className={styling.salePrice}>${salePrice}</p>
            </div>
        )
    }
    return (
        <p className="salePrice">${defaultPrice}</p>
    )
}

export default Price;