import React from 'react';
import styles from './reviews.module.css';

let AddReviewButton = (props) => {
  return (
    <button className={styles.button} onClick={props.handleAddReview}>ADD A REVIEW +</button>
  )
}

export default AddReviewButton;