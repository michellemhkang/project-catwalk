import React from 'react';
import styling from './ImageGallery.module.css';

const Image = ({url}) => {
    return (
        <div className={styling.image}>
            <img className="image-slide" className={styling.image} src={url} />
        </div>
    )
}

export default Image;

// const Image = ({style}) => {
//     return (
//         <img className="image" className={styling.image} src={style.photos[0].url}></img>
//     )
// }

// export default Image;