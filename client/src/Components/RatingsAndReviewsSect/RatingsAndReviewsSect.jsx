import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import List from './List.jsx';
import AvgRatings from './AvgRatings.jsx';
import dummyReviewListData from './dummyData/dummyReviewListData.js';
import styles from './reviews.module.css';
import axios from 'axios';

class RatingsAndReviewsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviewList: dummyReviewListData.results,
      reviewList: [],
      reviewCount: '',
      currentProductId: this.props.id,
      averageRating: ''
    };

    this.getReviews = this.getReviews.bind(this);
  }

  getReviews() {
    // http request to server
    // receives with array of objects of reviews for given product
    // updates reviewList state

    // use example data for now
    // NOTE: currently, avgRatings only receives props when they are passed in originally, not when they are passed in during componentDidMount

    let id = this.state.currentProductId;
    axios.get('/reviews', {
      params: {
        id: id
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({
        reviewList: response.data.results,
        reviewCount: response.data.results.length
      })
    })
    .catch(error => {
      console.error(error)
    });

    // this.setState({
    //   reviewCount: this.state.reviewList.length,
    // });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return(
      <div className={styles.reviewsContainer}>
        <h1 className={styles.sectionTitle}>Ratings And Reviews</h1>
        <div className={styles.reviewsGrid}>
          <div className={styles.gridCol2}>
            {/* <AvgRatings reviewList={this.state.reviewList}/> */}
          </div>
          <div className={styles.gridCol1}>
            <ReviewCount reviewCount={this.state.reviewCount}/>
            <List reviewList={this.state.reviewList}/>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsAndReviewsSect;