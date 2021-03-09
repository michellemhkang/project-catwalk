import React from 'react';
import styling from './Image.module.css';

const Image = ({url}) => {
    return (
        <img className="image-slide" className={styling.image} src={url}></img>
    )
}

export default Image;

// const Image = ({style}) => {
//     return (
//         <img className="image" className={styling.image} src={style.photos[0].url}></img>
//     )
// }

// export default Image;