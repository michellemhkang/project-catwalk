import React from 'react';

let ReviewCount = (props) => {
  return (
    <p>{props.reviewCount} reviews, sorted by relevance</p>
  )
}

export default ReviewCount;