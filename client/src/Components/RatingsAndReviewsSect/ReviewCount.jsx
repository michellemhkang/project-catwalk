import React from 'react';
import styles from './reviews.module.css';

let ReviewCount = (props) => {
  return (
    <p className={styles.reviewCounter}>{props.reviewCount} reviews, sorted by relevance</p>
  )
}

export default ReviewCount;