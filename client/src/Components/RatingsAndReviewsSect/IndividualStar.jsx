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
  }

  handleClick(e) {
    this.props.handleStarClick(this.props.starNum);
  }

  render() {
    return (
      <div>
      {this.state.hovered
        ? <i className="fas fa-star" value={this.props.starNum} onClick={this.handleClick}></i>
        : <i className="far fa-star" value={this.props.starNum} onClick={this.handleClick}></i>
      }
      </div>
    )
  }
}

export default IndividualStar;