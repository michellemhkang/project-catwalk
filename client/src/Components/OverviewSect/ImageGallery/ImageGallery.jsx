import React from 'react';
import Arrow from './Arrow.jsx';
import Image from './Image.jsx';

class ImageGallery extends React.Component {
    constructor({photos}) {
        super(props)
        this.state = {
            currentImage: photos[0].url
        }
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = this.props.photos.length - 1;
        const { currentImage } = this.state;
        const shouldResetIndex = currentImage === 0;
        const index = shouldResetIndex ? lastIndex : currentImage - 1; 

        this.setState({
            currentImage: index
        })
    }

    nextSlide() {
        const lastIndex = this.props.photos.length - 1;
        const { currentImage } = this.state;
        const shouldResetIndex = currentImage === lastIndex;
        const index = shouldResetIndex ? 0 : currentImage + 1; 

        this.setState({
            currentImage: index
        })  
    }

    render() {
        // const images = this.props.styleInfo.map((style, index) => {
        //     return <Image photos={style.photos} key={index} />
        // })

        // const names = this.props.styleInfo.map((style, index) => {
        //     return <Image names={style.names} key={index} />
        // })

        const { currentImage } = this.state

        return (
            <div className="carousel">
                <Arrow
                direction="left"
                handleClick={this.previousSlide}
                style={this.props.name} />

                <Image url={this.state.currentImage} />

                <Arrow
                direction="right"
                handleClick={this.nextSlide}
                style={this.props.name} />
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