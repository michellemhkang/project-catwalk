import React from 'react'
import styles from './Question.modules.css'
import Answers from './Answers.jsx'

class Question extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    AnswersDB: [],
    Answers: [],
    question_helpfulness: 0,
    pushed: false

    }
    this.addAns= this.addAns.bind(this)
    this.Yes = this.Yes.bind(this)
    this.rerender = this.rerender.bind(this)
  }

  rerender(){
    var array = [];
    for(var key in this.props.quest.answers){
      array.push(this.props.quest.answers[key])
    }
    var array2 = [];
    array2.push(array[0])
    array2.push(array[1])
    this.setState({
      AnswersDB: array,
      Answers: array2,
      question_helpfulness: this.props.quest.question_helpfulness
    })
  }

  addAns(){
    var array = [];
    var currentLength = this.state.Answers.length;

    while(currentLength < this.state.Answers.length + 2){
      if(this.state.AnswersDB[currentLength] !== undefined){
        array.push(this.state.AnswersDB[currentLength])
      }
      currentLength++;
    }

    this.setState({
      Answers: [...this.state.Answers, ...array]
    })

  }

Yes(){

if(!this.state.pushed ){
var truth = !this.state.pushed
var num = this.state.question_helpfulness + 1
this.setState({
  pushed: truth,
  question_helpfulness: num
})

} else {
  var truth = !this.state.pushed
  var num = this.state.question_helpfulness - 1
  this.setState({
    pushed: truth,
    question_helpfulness: num
  })

}


}


 componentDidMount(){
   var array = [];
  for(var key in this.props.quest.answers){
    array.push(this.props.quest.answers[key])
  }
  var array2 = [];
  array2.push(array[0])
  array2.push(array[1])
  this.setState({
    AnswersDB: array,
    Answers: array2,
    question_helpfulness: this.props.quest.question_helpfulness
  })

 }


  render(){
if(this.state.AnswersDB.length <= 2){

    return(
      <>
      <li className={styles.Qlist}>
        <h3 className={styles.quest}>Q: {this.props.quest.question_body}</h3>
        <div className = {styles.helpDiv}>
        <p className={styles.helpfulQ}>Helpful? </p>
        <button className={styles.buttonQ} onClick={this.Yes} > Yes </button>
        <p className={styles.help}> ({this.state.question_helpfulness}) </p>
        </div>
        {this.state.Answers.map((answers,i) =>{
        if(answers !== undefined){
          return <Answers answers={answers} key ={i}/>
        }
        })}
        </li>
        <br></br>
      </>
    )
      }else {
        return(
          <>
          <li className={styles.Qlist}>
            <h3 className={styles.quest}>Q: {this.props.quest.question_body}</h3>
            <div className = {styles.helpDiv}>
            <p className={styles.helpfulQ}>Helpful? </p>
            <button className={styles.buttonQ} onClick={this.Yes}> Yes </button>
            <p className={styles.help}> ({this.state.question_helpfulness}) </p>
            </div>
            {this.state.Answers.map((answers,i) =>{
              if(answers !== undefined){
                return <Answers answers={answers} key ={i}/>
              }
            })}
            <br></br>
            <button onClick={this.addAns} >Load more answers</button>
            </li>
            <br></br>
          </>
        )


      }


  }




}
export default Question

