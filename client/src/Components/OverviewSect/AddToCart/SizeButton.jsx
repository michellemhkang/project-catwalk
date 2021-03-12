import React from 'react';
import styling from './Buttons.module.css';

class SizeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.changeSelectedSize(this.props.size);
        // this.props.closeMenu();
    }
    render() {

        return (
            <button className={styling.button} onClick={this.handleClick}>{this.props.size}</button>
        )
    }
}

export default SizeButton;