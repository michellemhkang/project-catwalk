import React from 'react';
import Arrow from './Arrow.jsx';
import Image from './Image.jsx';
import styling from './ImageGallery.module.css';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImageIndex: 0,
            slide: false
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.props.photos.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
            slide: true
        })
    }

    nextSlide() {
        const lastIndex = this.props.photos.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index,
            slide: true
        })
    }

    render() {
        // const images = this.props.styleInfo.map((style, index) => {
        //     return <Image photos={style.photos} key={index} />
        // })

        // const names = this.props.styleInfo.map((style, index) => {
        //     return <Image names={style.names} key={index} />
        // })

        const { currentImageIndex } = this.state
        const { name, photos } = this.props

        return (
            <div className={styling.gallery}>
                <Arrow
                direction="left"
                clickFunction={this.previousSlide}
                style={name} />

                <Image slide={this.state.slide} url={photos[currentImageIndex].url} />

                <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                style={name} />
            </div>
        )
    }
}

export default ImageGallery;

// const ImageGallery = ({styleInfo}) => {
//     return (
//         styleInfo.map((style, key) => {
//             return <Image style={style} key={key} />
//         })
//     );
// };

// export default ImageGallery;


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