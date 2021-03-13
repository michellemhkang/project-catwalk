import React from 'react';
import styling from './Styles.module.css';

class Styles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, name) {
        this.props.changeStyle(id, name);
    }

    render() {

        const isSelected = this.props.selectedStyleName === this.props.name;
        const className = isSelected ? styling.selectedThumbnail : styling.thumbnail;

        return (
            <div>
                <img src={this.props.photos[0].thumbnail_url} alt={this.props.name} onClick={() => this.handleClick(this.props.id, this.props.name)} className={className} />
            </div>
        )
    }
}

export default Styles;