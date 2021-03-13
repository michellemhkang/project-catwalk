import React from 'react';
import styling from './ProductOverview.module.css';

const FeatureChecklist = ({ feature, value }) => {

    return (
        <div>
            <i className={'fas fa-check'} />
            <span className={styling.feature}>
                {feature}:          {value}
            </span>
        </div>
    )
}

export default FeatureChecklist;