import React from 'react';

class SizeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(size) {
        this.props.changeSelectedSize(size);
        // this.props.closeMenu();
    }
    render() {

        return (
            <button onClick={() => this.handleClick(this.props.size)}>{this.props.size}</button>
        )
    }
}

export default SizeButton;