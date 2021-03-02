import React from 'react';
import Styles from './Styles.jsx';

// Props being passed here: Array of objects of styles for this product

class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStyle: this.props.productStyles
        }
    }

    render() {

        // const displayStyles = this.props.productStyles.map((style, index) => {
        //     <Styles style={style} key={index} /> 
        // })

        return (
            <div>
                <h3>Style: {this.state.selectedStyle}</h3>
                <ul>

                    {this.props.productStyles.map((style, index) => {
                    <Styles styleName={style.name} styleId={style.style_id} thumbnail={style.photos[0].thumbnail_url} key={index} />
                    })
                }
                    {/* <Styles styles={this.props.productStyles[1]}/> */}
                    {/* <p>{displayStyles}</p> */}
                </ul>
            </div>
        )
    }

}

export default StyleSelector;