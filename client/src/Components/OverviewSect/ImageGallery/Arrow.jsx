import React from 'react';
import styling from './ImageGallery.module.css';

const Arrow = ({ direction, clickFunction }) => {

    return (
        <div className={styling.arrow}>
            <i className={`fas fa-angle-${direction}`} onClick={clickFunction} />
        </div>
    )
}

export default Arrow;