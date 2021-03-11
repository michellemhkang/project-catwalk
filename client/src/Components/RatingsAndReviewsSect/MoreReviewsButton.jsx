import React from 'react';
import styles from './reviews.module.css';

let MoreReviewsButton = (props) => {
  return (
    <button className={styles.button} onClick={props.updateDisplayList}>MORE REVIEWS</button>
  )
}
export default MoreReviewsButton;