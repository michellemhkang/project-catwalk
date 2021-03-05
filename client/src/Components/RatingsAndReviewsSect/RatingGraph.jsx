import React from 'react';
import styles from './reviews.module.css';

let RatingGraph = ({numberOfRatings, rating, totalRatings}) => {
  var percentage = numberOfRatings / totalRatings * 100;

  return (
    <div className={styles.distribution}>
      <div className={styles.ratingLabel}>{rating} STARS</div>
      <div className={styles.barGraph}>
        <div className={styles.barFill} style={{width: percentage + '%'}}>
        </div>
      </div>
    </div>
  )
}


export default RatingGraph;

// `styles.bar-${rating}`

{/* <div>
<div className={styles.graphRow}>
  <div className={styles.graphBackground}>
    {rating + ' stars'}
    <div className={styles.bar} style={{width: percentage + '%'}}></div>
  </div>
</div>
<div className={styles.graphBetween}></div>
</div> */}



{/* <div>
      <div className={styles.ratingSide}>
        <div>{rating} stars</div>
      </div>
      <div className={styles.ratingMiddle}>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{width: percentage + '%'}}></div>
        </div>
      </div>
    </div> */}