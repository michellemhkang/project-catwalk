import React from 'react';

import styles from './reviews.module.css';

let AvgRecs = (props) => {
  return (
    !props.recsPercentage ? null : <p className={`${styles.row} ${styles.recText}`}>{props.recsPercentage}% of reviews recommend this product</p>
  )
}

export default AvgRecs;
