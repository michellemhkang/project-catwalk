import React from 'react';

const Arrow = (props) => {
    return (
        <div className={`slide-arrow ${props.direction}`} onClick={handleClick}>
            {style}
        </div>
    )
}

export default Arrow;