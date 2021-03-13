import React from 'react';
import FeatureChecklist from './FeatureChecklist.jsx';
import styling from './ProductOverview.module.css';

const ProductOverview = ({slogan, description, features}) => {
    // console.log('product overview at stake');
    // console.log(props.features);
    let featureList = features.map((feature, index) => {
        // console.log(feature);
        // console.log(feature.feature);
        return <FeatureChecklist feature={feature.feature} value={feature.value} key={index} />
    })

    return (
        <div className={styling.container} >

            <div className={styling.rowContainer}>

                <div className={styling.colContainer}>
                    <div className={styling.textContainer}>
                        <h3 className={styling.slogan}>{slogan}</h3>
                        <p className={styling.description}>{description}</p>
                    </div>

                </div>

                <div className={styling.featureChecklist}>
                    {featureList}
                </div>

            </div>

        </div>
    )
}

// class ProductOverview extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             slogan: this.props.productInfo.slogan,
//             description: this.props.productInfo.description,
//             features: this.props.productInfo.features
//             // this is an array of the features
//         }
//     }
//     render() {

//         // console.log(this.state.features);
//         const featureList = this.state.features.map((feature, index) => {
//             // console.log(feature);
//             // console.log(feature.feature);
//             return <FeatureChecklist feature={feature.feature} key={index} />
//         })

//         return (
//             <div>
//                 <h3>{this.state.slogan}</h3>
//                 <p>{this.state.description}</p>
//                 <div>{featureList}</div>
//                 {/* <FeatureChecklist features={this.state.features} /> */}
//             </div>
//         )
//     }
// }

export default ProductOverview;