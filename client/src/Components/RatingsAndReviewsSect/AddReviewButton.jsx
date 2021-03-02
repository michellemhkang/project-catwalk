import React from 'react';
import styles from './reviews.module.css';

let AddReviewButton = (props) => {
  return (
    <button onClick={props.handleAddReview}>Add A Review +</button>
  )
}

export default AddReviewButton;