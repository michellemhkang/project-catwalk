import React from 'react';
import styles from './reviews.module.css'
import IndividualStar from './IndividualStar.jsx';

class NewStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      hoverIndex: 0
    }
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleStarHover = this.handleStarHover.bind(this);
    this.handleStarLeave = this.handleStarLeave.bind(this);
  }

  handleStarClick(rating) {
    this.setState({
      rating: rating,
    }, this.props.handleRatingChange(rating))
  }

  handleStarHover(index) {
    this.setState({
      hoverIndex: index
    })
  }

  handleStarLeave() {
    if (!this.state.rating) {
      this.setState({
        hoverIndex: 0
      })
    }
  }

  renderStars() {
    let stars = [];
    let hoverIndex = this.state.hoverIndex;
    let hovered = false;
    for (let i = 1; i < 6; i++) {
      if (i <= hoverIndex) {
        hovered = true;
      }
      stars.push(<IndividualStar
        key={i}
        hoverIndex={hoverIndex}
        handleStarHover={this.handleStarHover}
        handleStarLeave={this.handleStarLeave}
        starNum={i}
        handleStarClick={this.handleStarClick}/>)
    }
    return stars;
  }

  render() {
    return (
      <span className={styles.newStarRow}>
        {this.renderStars()}
      </span>
    )
  }
}

export default NewStarRating;

{/* <i className={`${styles.star} far fa-star`} title="1" onClick={this.handleStarClick}></i>
<i className={`${styles.star} far fa-star`} title="2" onClick={this.handleStarClick}></i>
<i className={`${styles.star} far fa-star`} title="3" onClick={this.handleStarClick}></i>
<i className={`${styles.star} far fa-star`} title="4" onClick={this.handleStarClick}></i>
<i className={`${styles.star} far fa-star`} title="5" onClick={this.handleStarClick}></i> */}