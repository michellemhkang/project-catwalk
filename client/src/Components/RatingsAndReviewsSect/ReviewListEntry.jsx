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
    <div className={styles.reviewListEntry}>
      <Stars rating={review.rating}/>
      <h4 className="review-title">{review.summary}</h4>
      <span className="name-date">{review.reviewer_name} | {formatDate(review.date)}</span>
      <h5 className={styles.reviewBody}>{review.body}</h5>
      <hr className={styles.separatorLine} />
    </div>
  )
}

export default ReviewListEntry;