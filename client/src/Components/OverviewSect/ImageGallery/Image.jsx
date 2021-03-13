import React from 'react';
import styling from './ImageGallery.module.css';

const Image = ({ url, slide }) => {
    
    if (slide) {
        return (
            <div>
                <img className={styling.imageSlide} src={url} />
            </div>
        )
    }
    return (
        <div>
            <img className={styling.image} src={url} />
        </div>
    )
}

export default Image;