import React from 'react';
import styles from './Question.modules.css';


class AddQustion extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Question:''
    }
    this.QuestionTxt = this.QuestionTxt.bind(this)
  }

  QuestionTxt(){
  this.setState({
      Question: event.target.value
  })
  }

render(){
  if(!this.props.Add){
    return null;
  }
  return(
    <>
  <div className ={styles.imageDiv}>
    <div className ={styles.qDiv}>
    <form onSubmit={(event)=>{ event.preventDefault(); this.props.SubmitQuestion(this.state.Question); this.props.AddQuestion();}}>
    <button className={styles.Qbutton}> ✖ </button>
      <input placeholder={'Question here'} value={this.state.Question} onChange={(event)=>{event.preventDefault(); this.QuestionTxt()}}></input>
      <button>Submit Question</button>
    </form>
    </div>
  </div>
    </>
  )
}


}
export default AddQustion;