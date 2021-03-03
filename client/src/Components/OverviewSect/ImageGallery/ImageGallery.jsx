import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: this.props.productInfo[0].photos[0].url
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.currentImage}></img>
            </div>
        )
    }
}
export default ImageGallery;