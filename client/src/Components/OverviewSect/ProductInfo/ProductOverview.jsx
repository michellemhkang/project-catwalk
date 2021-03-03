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

        console.log(this.state.features);
        const featureList = this.state.features.map((feature, index) => {
            console.log(feature);
            console.log(feature.feature);
            return <li feature={feature.feature} key={index} />
        })

        return (
            <div>
                <h3>{this.state.slogan}</h3>
                <p>{this.state.description}</p>
                <ul>{featureList}</ul>
                {/* <FeatureChecklist features={this.state.features} /> */}
            </div>
        )
    }
}

export default ProductOverview;