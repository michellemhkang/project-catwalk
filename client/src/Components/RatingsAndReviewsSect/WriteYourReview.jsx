import React from 'react';
import styles from './reviews.module.css';
import NewStarRating from './NewStarRating.jsx';

class WriteYourReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: 'yes'
    }
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
  }

  handleRecommendChange(e) {
    this.setState({recommend: e.target.value})
  }

  render() {
    return (
      <div className={styles.newReview}>
        <h3 className={styles.newReviewTitle}>Write Your Review</h3>
        <h4 className={styles.newReviewAbout}>About the product</h4>
        <span className={styles.starRow}>
          <p>Rating: </p>
          <NewStarRating />
        </span>
        <span className={styles.starRow}>
          <p>Do you recommend this product?</p>
          <div onChange={this.handleRecommendChange}>
            <label>
              <input
                type="radio"
                value="true"
                checked={this.state.recommend === "true"}
                onChange={this.handleChange}
              />
              Yes
          </label>
          <label>
              <input
                type="radio"
                value="false"
                checked={this.state.recommend === "false"}
                onChange={this.handleChange}
              />
              No
          </label>
          </div>
        </span>
      </div>
    )
  }
}

export default WriteYourReview;