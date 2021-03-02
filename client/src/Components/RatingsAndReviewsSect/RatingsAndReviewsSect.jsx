import React from 'react';
import axios from 'axios';

import AvgRecs from './AvgRecs.jsx';
import ReviewCount from './ReviewCount.jsx';
import List from './List.jsx';
import AvgRatings from './AvgRatings.jsx';
import dummyReviewListData from './dummyData/dummyReviewListData.js';
import styles from './reviews.module.css';


class RatingsAndReviewsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviewList: dummyReviewListData.results,
      reviewList: [],
      reviewCount: '',
      currentProductId: this.props.id,
      averageRating: 0,
      recsPercentage: 0
    };

    this.getReviews = this.getReviews.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
  }

  getReviews() {
    let id = this.state.currentProductId;
    axios.get('/reviews', {
      params: {
        id: id
      }
    })
    .then((response) => {
      console.log('data from server ', response.data.results)
      this.setState({
        reviewList: response.data.results,
        reviewCount: response.data.results.length
      }, this.calculateAverageRating)
    })
    .catch(error => {
      console.error(error)
    });
  }

  calculateAverageRating() {
    let ratingsTotal = 0;
    let recsTotal = 0;
    this.state.reviewList.forEach(review => {
      ratingsTotal += review.rating;
      if (review.recommend) {
        recsTotal += review.recommend
      }
    });

    let averageRating = Math.round((ratingsTotal / this.state.reviewList.length) * 10) / 10;
    let recsPercentage = recsTotal / this.state.reviewList.length * 100;
    this.setState({averageRating: averageRating, recsPercentage: recsPercentage});
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return(
      <div className={styles.reviewsContainer}>
        <h1 className={styles.sectionTitle}>RATINGS AND REVIEWS</h1>
        <div className={styles.reviewsGrid}>
          <div className={styles.gridCol1}>
            <AvgRatings averageRating={this.state.averageRating}/>
            <AvgRecs recsPercentage={this.state.recsPercentage} />
          </div>
          <div className={styles.gridCol2}>
            <ReviewCount reviewCount={this.state.reviewCount}/>
            <List reviewList={this.state.reviewList}/>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsAndReviewsSect;