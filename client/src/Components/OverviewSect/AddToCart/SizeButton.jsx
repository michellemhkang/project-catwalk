import React from 'react';
import styling from './Buttons.module.css';

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
            <button className={styling.button} onClick={() => this.handleClick(this.props.size)}>{this.props.size}</button>
        )
    }
}

export default SizeButton;