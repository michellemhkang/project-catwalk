import React from 'react';
import styles from './reviews.module.css';

let ReviewCount = (props) => {
  return (
    <div className={styles.row}>
      <p className={styles.reviewCounter}>{props.reviewCount} reviews, sorted by </p>
      <p className={`${styles.reviewCounter} ${styles.dynamicUnderline}`}> relevance</p>
    </div>
  )
}

export default ReviewCount;