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
    <div className ={`${styles.qDiv} ${styles.fadeIn}`}>
    <div className={styles.typeB}>
      <h2 className={styles.askUrQ}>Ask Your Question</h2>
      <p className={styles.subtext}>About the {this.props.pName}</p>
    <form >
    <button className={styles.Qbutton} onClick={(event)=>{this.props.AddQuestion()}}> ✖ </button>
      <textarea placeholder={'Question here'} value={this.state.Question} onChange={(event)=>{event.preventDefault(); this.QuestionTxt()}} className={styles.questionTextarea}></textarea>
      <input className={styles.emailTextarea} value={this.state.email} placeholder={'Why did you like the product or not?'}onChange={(event)=>{event.preventDefault(); this.emailTxt()}}></input>
      <input value={this.state.username} placeholder={'Example: jackson11!'}onChange={(event)=>{event.preventDefault(); this.UsernameTxt()}} maxLength={'60'}className={styles.usernameTextarea}></input>
      <button className={styles.SubmitQ} onClick={(event)=>{ event.preventDefault(); this.props.SubmitQuestion(this.state.Question,this.state.email,this.state.username); this.props.AddQuestion();}}>Submit Question</button>
    </form>
    </div>
    </div>
  </div>
    </>
  )
}


}
export default AddQustion;