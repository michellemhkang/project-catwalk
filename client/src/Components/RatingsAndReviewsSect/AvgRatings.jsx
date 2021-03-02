import React from 'react';
import styles from './reviews.module.css';
import Stars from './Stars.jsx'

// class AvgRatings extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       averageRating: 0
//     }
//     this.calculateAverageRating = this.calculateAverageRating.bind(this);
//   }

//   componentDidMount() {
//     this.calculateAverageRating();
//   }

//   render() {
//     return(
//       <span>
//         <p className={styles.averageRatingNumber}>{this.state.averageRating}</p>
//         <Stars averageRating={this.state.averageRating} />
//       </span>
//     )
//   }
// }

let AvgRatings = (props) => {
  return(
    <span className={styles.averageRating}>
      <p className={styles.averageRatingNumber}>{props.averageRating}</p>
      <Stars averageRating={props.averageRating} />
    </span>
  )
}

export default AvgRatings;