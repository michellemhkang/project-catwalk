import React from 'react';
import styles from './reviews.module.css';

let CharacteristicGraph = ({name, value}) => {
  let labels = {
    Size: ['Too small', 'Perfect', 'Too Big'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I Expected', 'Perfect'],
    Length: ['Runs Short', 'Perfect', 'Runs Long'],
    Fit: ['Tight', 'Perfect', 'Runs Long']
  }

  return (
    !value ? null :
    <div className={styles.comparisonBarWrapper}>
      <div className={styles.comparisonBarTitle}>{name}</div>
      <div className={styles.comparisonBarLine}>
        <div className={`${styles.comparisonTriangle} ${styles.triangle}`} style={{left: `${value / 5 * 100}%`}}>
        </div>
      </div>
      <div className={styles.comparisonBarLabels}>
        <label className={styles.comparisonBarLabels}>{labels[name][0]}</label>
        <label className={styles.comparisonBarLabels}>{labels[name][1]}</label>
        <label className={styles.comparisonBarLabels}>{labels[name][2]}</label>
      </div>
    </div>
  )
}


export default CharacteristicGraph;