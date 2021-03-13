import React from 'react';

import styles from './reviews.module.css';
import CharacteristicGraph from './CharacteristicGraph.jsx'

let CharacteristicsSummary = ({characteristics}) => {
  let renderCharacteristicsGraphs = (characteristics) => {
    let graphs = [];
    for (let characteristic in characteristics) {
      graphs.push(<CharacteristicGraph key={characteristics[characteristic].id} name={characteristic} value={characteristics[characteristic].value} />)
    }
    return graphs;
  }

  return (
    <div className={styles.characteristicsContainer}>
      {renderCharacteristicsGraphs(characteristics)}
    </div>
  )
}

export default CharacteristicsSummary;
