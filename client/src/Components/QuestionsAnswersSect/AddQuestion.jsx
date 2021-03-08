import React from 'react';
import styles from './Question.modules.css';


class AddQustion extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Question:'',
      email:'',
      username:''
    }
    this.QuestionTxt = this.QuestionTxt.bind(this)
    this.emailTxt = this.emailTxt.bind(this)
    this.UsernameTxt = this.UsernameTxt.bind(this)
  }
  UsernameTxt(){
    this.setState({
      username: event.target.value
    })
  }
  emailTxt(){
    this.setState({
      email: event.target.value
    })
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
    <form onSubmit={(event)=>{ event.preventDefault(); this.props.SubmitQuestion(this.state.Question,this.state.email,this.state.username); this.props.AddQuestion();}}>
    <button className={styles.Qbutton}> ✖ </button>
      <input placeholder={'Question here'} value={this.state.Question} onChange={(event)=>{event.preventDefault(); this.QuestionTxt()}}></input>
      <input value={this.state.email} placeholder={'Email'}onChange={(event)=>{event.preventDefault(); this.emailTxt()}}></input>
      <input value={this.state.username} placeholder={'Username'}onChange={(event)=>{event.preventDefault(); this.UsernameTxt()}}></input>
      <button>Submit Question</button>
    </form>
    </div>
  </div>
    </>
  )
}


}
export default AddQustion;