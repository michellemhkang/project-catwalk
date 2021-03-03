import React from 'react';
import styles from './Thumbnails.css';

const Price = ({defaultPrice, salePrice}) => {
    if (salePrice !== null) {
        return (
            <div>
                <p className="defaultPrice" className={styles.strikethrough}>
                    ${defaultPrice}
                </p>
                <p className="salePrice">${salePrice}</p>
            </div>
        )
    }
    return (
        <p className="salePrice">
            ${defaultPrice}
        </p>
    )
}

export default Price;