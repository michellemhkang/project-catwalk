import React from 'react';
import styles from './reviews.module.css';

let Stars = (props) => {

  let rating;
  props.rating ? rating = props.rating : rating = props.averageRating;

  let renderRatingStars = (rating) => {
    let stars = [];
    let index = rating;
    let remainder = index % index;

    while (index > 0) {
      if (index < 1) {
        if (index >= 0.5) {
          stars.push(<i className={`fas fa-star-half-alt`} key={index}></i>)
        }
      } else {
        stars.push(<i className={`fas fa-star`} key={index}></i>);
      }
      index--;
    }

    for (var i = stars.length; i < 5; i++) {
      stars.push(<i className={`far fa-star`} key={5+i}></i>)
    }
    return stars;
  }

  return(
    <span>
    {renderRatingStars(rating)}
    </span>
  )
}

export default Stars;