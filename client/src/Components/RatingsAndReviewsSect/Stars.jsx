import React from 'react';

let Stars = (props) => {

  let rating;
  props.rating ? rating = props.rating : rating = props.averageRating;

  // let renderRatingStars = (rating) => {
  //   let stars = [];
  //   for (var i = 0; i < rating; i++) {
  //     stars.push(<i className="fas fa-star" key={i}></i>);
  //   }
  //   for (var j = 0; j < 5 - rating; j++) {
  //     stars.push(<i className="far fa-star" key={i}></i>)
  //   }
  //   return stars;
  // }

  // let renderRatingStars = (rating) => {
  //   let stars = [];
  //   let index = rating;
  //   while (index > 0) {
  //     if (index < 1) {
  //       if (Math.round(index) === 1) {
  //         stars.push(<i className="fas fa-star-half-alt" key={index}></i>)
  //       }
  //     } else {
  //       stars.push(<i className="fas fa-star" key={index}></i>);
  //     }
  //     index--;
  //   }
  //   let remaining = 5 - stars.length;
  //   for (var i = 0; i < remaining; i++) {
  //     stars.push(<i className="far fa-star" key={i}></i>)
  //   }
  //   return stars;
  // }

  let renderRatingStars = (rating) => {
    let stars = [];
    let index = rating;
    let remainder = index % index;

    while (index > 0) {
      if (index < 1) {
        if (index >= 0.5) {
          stars.push(<i className="fas fa-star-half-alt" key={index}></i>)
        }
      } else {
        stars.push(<i className="fas fa-star" key={index}></i>);
      }
      index--;
    }

    console.log(stars.length)
    for (var i = stars.length; i < 5; i++) {
      stars.push(<i className="far fa-star"></i>)
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