import React from 'react';
import Stars from './Stars.jsx';
import styles from './reviews.module.css';

let ReviewListEntry = ({review}) => {

  let formatDate = (isoDate) => {
    let date = new Date(isoDate);
      let months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
      }

      let month = (date.getMonth() + 1).toString();
      date = `${months[month]} ${date.getDate()}, ${date.getFullYear()}`;
      return date;
  }

  return (
    <div className={`${styles.reviewListEntry} ${styles.fadeIn}`}>
      <span className={styles.starsAndDate}>
        <Stars rating={review.rating}/>
        <span className={styles.nameDate}>{review.reviewer_name}, {formatDate(review.date)}</span>
      </span>
      <h4 className={styles.reviewTitle}>{review.summary}</h4>
      <h5 className={styles.reviewBody}>{review.body}</h5>
      <span className={styles.helpfulRow}>
        <p className={`${styles.nameDate} ${styles.gray}`}>Helpful?</p>
        <p className={`${styles.nameDate} ${styles.gray} ${styles.dynamicUnderline} ${styles.pointer}`}>Yes</p>
        <p className={styles.nameDate}>({review.helpfulness}) </p>
        <p className={`${styles.gray} ${styles.nameDate}`}>|</p>
        <p className={`${styles.nameDate} ${styles.gray} ${styles.dynamicUnderline} ${styles.pointer}`}>Report</p>
      </span>
    </div>
  )
}

export default ReviewListEntry;