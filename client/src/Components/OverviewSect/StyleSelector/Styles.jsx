import React from 'react';

// class Styles extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     render() {
//         return (

//         )
//     }
// }

const Styles = (props) => {
    return (
        <div>
            <p>{props.styleName}</p>
            {/* <p>Do I exist</p> */}
        </div>
    )
}

export default Styles;