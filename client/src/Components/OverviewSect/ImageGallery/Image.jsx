import React from 'react';
import styling from './ImageGallery.module.css';

const Image = ({url, slide}) => {
        if (slide) {
            return (
            <div>
                <img className={styling.image.slide} src={url} />
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

// const Image = ({style}) => {
//     return (
//         <img className="image" className={styling.image} src={style.photos[0].url}></img>
//     )
// }

// export default Image;