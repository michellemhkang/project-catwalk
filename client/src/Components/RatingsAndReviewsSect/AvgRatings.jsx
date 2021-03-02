import React from 'react';
import styles from './reviews.module.css';
import Stars from './Stars.jsx'

class AvgRatings extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      averageRating: 0
    }
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
  }

  calculateAverageRating() {
    let total = 0;

    console.log('received props ', this.props.reviewList);

    this.props.reviewList.forEach(review => {
      total += review.rating;
    });

    let average = total / this.props.reviewList.length;

    this.setState({averageRating: average});
  }

  componentDidMount() {
    this.calculateAverageRating();
  }

  render() {
    return(
      <span>
        <p className={styles.averageRatingNumber}>{this.state.averageRating}</p>
        <Stars averageRating={this.state.averageRating} />
      </span>
    )
  }
}

export default AvgRatings;