import React from 'react';
import styling from './ProductInfo.module.css';
import Price from './Price.jsx';

const ProductInfo = ({ category, name, defaultPrice, salePrice }) => {

    if (category !== undefined) {
        return (
            <div className={styling.container}>
                <h3 className={styling.category}>{category.toUpperCase()}</h3>
                <h1 className={styling.name}>{name}</h1>
                <Price defaultPrice={defaultPrice} salePrice={salePrice} />
            </div>
        )
    }
    return (
        <div>Product Info Incoming</div>
    )
}

export default ProductInfo;