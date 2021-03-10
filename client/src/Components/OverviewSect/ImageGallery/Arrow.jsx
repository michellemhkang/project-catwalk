import React from 'react';

const Arrow = (props) => {
    return (
        <div className={`fas fa-angle-${props.direction}`} onClick={props.clickFunction}>
            {/* {props.style} */}
        </div>
    )
}

export default Arrow;