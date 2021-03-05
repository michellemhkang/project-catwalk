import React from 'react';
import styles from './reviews.module.css';
import RatingGraph from './RatingGraph.jsx';

let RatingBreakdown = ({totalRatings, ratings}) => {
  let renderRatingGraphs = (ratings) => {
    let graphs = [];
    for (let rating in ratings) {
      graphs.push(<RatingGraph key={rating} rating={rating} numberOfRatings={Number(ratings[rating])} totalRatings={totalRatings} />)
    }
    return graphs;
  }

  return (
    <div className={styles.graphContainer}>
      {renderRatingGraphs(ratings)}
    </div>
  )
}

export default RatingBreakdown;