import React from 'react';
import styles from './reviews.module.css';

let RatingGraph = ({numberOfRatings, rating, totalRatings}) => {
  var percentage = numberOfRatings / totalRatings * 100;

  return (
    <div className={styles.distribution}>
      <div className={styles.ratingLabel}>{rating} stars</div>
      <div className={styles.barGraph}>
        <div className={styles.barFill} style={{width: percentage + '%'}}>
        </div>
      </div>
    </div>
  )
}


export default RatingGraph;
