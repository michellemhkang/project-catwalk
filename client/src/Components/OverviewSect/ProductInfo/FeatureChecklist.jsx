import React from 'react';

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

const FeatureChecklist = ({feature}) => {
    return (
        <li>{feature}</li>
    )
}

export default FeatureChecklist;