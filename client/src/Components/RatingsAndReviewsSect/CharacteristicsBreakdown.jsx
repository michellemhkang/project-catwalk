import react from 'React';
import styles from './reviews.module.css';
import CharacteristicGraph from './CharacteristicGraph.jsx'

let CharacteristicsBreakdown = ({characteristics}) => {
  let renderCharacteristicsGraphs = (characteristics) => {
    let graphs = [];
    for (let characteristic in characteristics) {
      graphs.push(<CharacteristicGraph key={characteristics[characteristic].id} name={characteristics[characteristic]} value={characteristics[characteristics].value} />)
    }
    return graphs;
  }

  return (
    <div className={styles.graphContainer}>
      {renderCharacteristicsGraphs(characteristics)}
    </div>
  )
}

export default CharacteristicsBreakdown