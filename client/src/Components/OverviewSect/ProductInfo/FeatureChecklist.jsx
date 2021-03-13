import React from 'react';
import styling from './ProductOverview.module.css';

// class FeatureChecklist extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     render() {
//         return (
//             <li>{this.props.features.feature}</li>
//         )
//     }
// }

const FeatureChecklist = ({feature, value}) => {
    return (
        <div>
            <i className={'fas fa-check'} />
            <span className={styling.feature}>
                {feature}:          {       value}
            </span>

        </div>
    )
}

export default FeatureChecklist;