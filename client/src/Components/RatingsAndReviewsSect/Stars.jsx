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
    {/* <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> */}
    {renderRatingStars(rating)}
    </span>
  )
}

export default Stars;