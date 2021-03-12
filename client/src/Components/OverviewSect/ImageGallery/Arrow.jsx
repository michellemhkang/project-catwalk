import React from 'react';
import styling from './ImageGallery.module.css';

const Arrow = (props) => {
    return (
        <div className={styling.arrow}>
            <i className={`fas fa-chevron-${props.direction}`} onClick={props.clickFunction} />
        </div>
    )
}

export default Arrow;