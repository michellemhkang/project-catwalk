import React from 'react';

let Stars = (props) => {

  let rating;
  props.rating ? rating = props.rating : rating = props.averageRating;

  let renderRatingStars = (rating) => {
    let stars = [];
    for (var i = 0; i < rating; i++) {
      stars.push(<i className="fas fa-star" key={i}></i>);
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