import React from 'react';
import styles from './reviews.module.css'

class IndividualStar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleClick(e) {
    this.props.handleStarClick(this.props.starNum);
  }

  handleHover(e) {
    this.props.handleStarHover(this.props.starNum)
  }

  handleLeave(e) {
    this.props.handleStarLeave()
  }

  render() {
    return (
      <div>
      {this.props.starNum <= this.props.hoverIndex
        ? <i className="fas fa-star" value={this.props.starNum} onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}></i>
        : <i className="far fa-star" value={this.props.starNum} onClick={this.handleClick} onMouseEnter={this.handleHover}></i>
      }
      </div>
    )
  }
}

export default IndividualStar;