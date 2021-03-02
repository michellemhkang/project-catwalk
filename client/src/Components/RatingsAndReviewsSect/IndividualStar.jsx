import React from 'react';
import styles from './reviews.module.css'

class IndividualStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      value: this.props.starNum
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClick(e) {
    this.props.handleStarClick(this.props.starNum);
  }

  handleHover(e) {
    this.setState({hovered: !this.state.hovered})
  }

  render() {
    return (
      <div>
      {this.state.hovered
        ? <i className="fas fa-star" value={this.props.starNum} onClick={this.handleClick} onMouseEnter={this.handleHover}></i>
        : <i className="far fa-star" value={this.props.starNum} onClick={this.handleClick} onMouseEnter={this.handleHover}></i>
      }
      </div>
    )
  }
}

export default IndividualStar;