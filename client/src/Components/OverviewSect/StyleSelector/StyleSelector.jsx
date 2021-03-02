import React from 'react';
import Styles from './Styles.jsx';

// Props being passed here: Array of objects of styles for this product
class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStyle: this.props.productStyles[0].name
        }
        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(style) {
        this.setState({
            selectedStyle: style
        })
    }

    render() {

        // console.log('props:', this.props.productStyles);
        const stylesInfo = this.props.productStyles.map((style, index) => {
            // console.log('style:', style);
            return <Styles name={style.name} photos={style.photos} id={style.style_id} key={index} changeStyle={this.changeStyle} /> 
        })

        return (
            <div>
                <h3>Style: {this.state.selectedStyle}</h3>
                <div>{stylesInfo}</div>
            </div>
        )
    }

}

export default StyleSelector;