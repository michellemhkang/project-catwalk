import React from 'react';

const Arrow = (props) => {
    return (
        <i className={`fas fa-angle-${props.direction}`} onClick={props.clickFunction}>
            {/* {props.style} */}
        </i>
    )
}

export default Arrow;