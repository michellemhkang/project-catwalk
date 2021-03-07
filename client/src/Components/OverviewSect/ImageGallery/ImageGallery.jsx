import React from 'react';
import Image from './Image.jsx';

const ImageGallery = ({styleInfo}) => {
    return (
        styleInfo.map((style, key) => {
            return <Image style={style} key={key} />
        })
    );
};

export default ImageGallery;


// class ImageGallery extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             test: 'test',
//             currentImage: this.props.styleInfo[0].photos[0].url
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.currentImage}
//                 {/* <img src={this.state.currentImage}></img> */}
//             </div>
//         )
//     }
// }

// export default ImageGallery;