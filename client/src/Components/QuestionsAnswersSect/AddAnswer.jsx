import React from 'react';
import styles from './Question.modules.css';

class AddAnswer extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    console.log(this.props)
    if(!this.props.add){
  return(
    null
    )}

      return (<>
      <div className ={styles.imageDiv}>
      <div className ={styles.qDiv}>
      <form>
      <button onClick={(event)=>{this.props.addAans()}}>KILL ME </button>

      </form>
      </div>
      </div>
      </>
      )



}
}

export default AddAnswer