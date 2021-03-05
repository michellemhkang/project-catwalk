import React from 'react';
import styles from './reviews.module.css';

let CharacteristicGraph = ({name, value}) => {
  console.log('value ', value)
  return (
    <div className={styles.comparisonBarWrapper}>
      <div className={styles.comparisonBarTitle}>{name}</div>
      <div className={styles.comparisonBarLine}>
        <div className={`${styles.comparisonTriangle} ${styles.triangle}`} style={{left: `${value / 5 * 100}%`}}>
        </div>
      </div>
      <div className={styles.comparisonBarLabels}>
        <label className={styles.comparisonBarLabels}>Too small</label>
        <label className={styles.comparisonBarLabels}>Perfect</label>
        <label className={styles.comparisonBarLabels}>Too large</label>
      </div>
    </div>
  )
}


export default CharacteristicGraph;