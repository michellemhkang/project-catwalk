import React from 'react';
import styling from './ImageGallery.module.css';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
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

        const { currentImageIndex } = this.state;
        const { name, photos } = this.props;

        return (
            <div className={styling.gallery}>

                <div className={styling.arrow}>
                    <Arrow
                        direction="left"
                        clickFunction={this.previousSlide} />
                </div>

                <div className={styling.image}>
                    <Image slide={this.state.slide} url={photos[currentImageIndex].url} />
                </div>

                <div className={styling.arrow}>
                    <Arrow
                        direction="right"
                        clickFunction={this.nextSlide} />
                </div>

            </div>
        )
    }
}

export default ImageGallery;