import React from 'react';
import styling from './Image.module.css';

const Image = ({style}) => {
    return (
        <img className="image" className={styling.image} src={style.photos[0].url}></img>
    )
}

export default Image;