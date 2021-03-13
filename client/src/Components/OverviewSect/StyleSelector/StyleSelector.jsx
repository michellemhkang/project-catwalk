import React from 'react';
import styling from './Styles.module.css';
import Styles from './Styles.jsx';

class StyleSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStyleName: this.props.styles[0].name,
        }
        // this.baseState = this.state;
        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(styleId, styleName) {
        this.props.setSelectedStyle(styleId);
        this.setState({
            selectedStyleName: styleName
        })
    }

    // reset = () => {
    //     this.setState(this.baseState);
    // }

    render() {

        const stylesInfo = this.props.styles.map((style, index) => {
            return <Styles selectedStyleName={this.state.selectedStyleName} name={style.name} photos={style.photos} id={style.style_id} key={index} changeStyle={this.changeStyle} />
        })

        return (

            <div>

                <div className={styling.textContainer}>
                    <div className={styling.style}>STYLE    &gt;</div>
                    <div className={styling.selectedName}>{this.state.selectedStyleName}</div>
                </div>

                <div className={styling.thumbnailContainer}>{stylesInfo}</div>

            </div>
        )
    }
}

export default StyleSelector;