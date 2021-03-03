import React from 'react';
import FeatureChecklist from './FeatureChecklist.jsx';

class ProductOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slogan: this.props.productInfo.slogan,
            description: this.props.productInfo.description,
            features: this.props.productInfo.features
            // this is an array of the features
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.slogan}</h3>
                <p>{this.state.description}</p>
                <FeatureChecklist features={this.state.features} />
            </div>
        )
    }
}

export default ProductOverview;