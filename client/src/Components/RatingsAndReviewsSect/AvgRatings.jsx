import React from 'react';

import styles from './reviews.module.css';
import Stars from './Stars.jsx'

let AvgRatings = (props) => {
  return(
    props.averageRating
    ?
    <span className={styles.averageRating}>
      <p className={styles.averageRatingNumber}>{props.averageRating}</p>
      <Stars averageRating={props.averageRating} />
    </span>
    :
    null
  )
}

export default AvgRatings;
