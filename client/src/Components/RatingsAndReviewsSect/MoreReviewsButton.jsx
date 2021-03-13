import React from 'react';

import styles from './reviews.module.css';

let MoreReviewsButton = (props) => {
  return (
    !props.showMoreReviews || props.reviewCount === 0 ? null : <button className={styles.button} onClick={props.updateDisplayList}>MORE REVIEWS</button>
  )
}

export default MoreReviewsButton;
