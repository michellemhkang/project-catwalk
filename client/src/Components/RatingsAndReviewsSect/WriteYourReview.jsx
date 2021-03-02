import React from 'react';
import styles from './reviews.module.css';
import NewStarRating from './NewStarRating.jsx';

class WriteYourReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.newReview}>
        <h3 className={styles.newReviewTitle}>Write Your Review</h3>
        <h4 className={styles.newReviewAbout}>About the product</h4>
        <span className={styles.starRow}>
          <p>Rating:</p>
          <NewStarRating />
        </span>
        <span className={styles.starRow}>
          <p>Do you recommend this product?</p>
          <input type="radio" id="recommendYes" name="recommendYes" value="true" checked />
          <label htmlFor="reccomendYes">Yes</label>
          <input type="radio" id="recommendNo" name="recommendNo" value="false" />
          <label htmlFor="reccomendNo">No</label>
        </span>
      </div>
    )
  }
}

export default WriteYourReview;