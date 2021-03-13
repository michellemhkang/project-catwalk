import React from 'react';
import styling from './ProductOverview.module.css';
import FeatureChecklist from './FeatureChecklist.jsx';

const ProductOverview = ({ slogan, description, features }) => {

    let featureList = features.map((feature, index) => {
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

export default ProductOverview;