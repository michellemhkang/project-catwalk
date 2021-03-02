import React from 'react';
import styles from './reviews.module.css'
import IndividualStar from './IndividualStar.jsx';

class NewStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: ''
    }
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick(rating) {
    this.setState({
      rating: rating
    })
  }

  renderStars() {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(<IndividualStar starNum={i} handleStarClick={this.handleStarClick}/>)
    }
    return stars;
  }

  render() {
    return (
      <span className={styles.starRow}>
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