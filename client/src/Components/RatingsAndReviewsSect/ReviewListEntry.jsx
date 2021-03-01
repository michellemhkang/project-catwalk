import React from 'react';
import Stars from './Stars.jsx';

let ReviewListEntry = ({review}) => {
  return (
    <div className="review-list-entry">
      <Stars rating={review.rating}/>
      <h4 className="review-title">{review.summary}</h4>
      <span className="name-date">{review.reviewer_name} | {review.date}</span>
      <h5 className="review-body">{review.body}</h5>
    </div>
  )
}

export default ReviewListEntry;