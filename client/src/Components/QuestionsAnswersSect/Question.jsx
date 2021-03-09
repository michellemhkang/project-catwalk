import React from 'react'
import styles from './Question.modules.css'
import Answers from './Answers.jsx'
import AddAanswer from './AddAnswer.jsx'
import axios from 'axios'

class Question extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    AnswersDB: [],
    Answers: [],
    question_helpfulness: 0,
    pushed: false,
    add: false,
    scroll: false

    }
    this.addAns= this.addAns.bind(this)
    this.Yes = this.Yes.bind(this)
    this.rerender = this.rerender.bind(this)
    this.less = this.less.bind(this)
    this.renderless = this.renderless.bind(this)
    this.renderload = this.renderload.bind(this)
    this.AddAanswerToQuestion = this.AddAanswerToQuestion.bind(this)
    this.LoadAnswersScroll = this.LoadAnswersScroll.bind(this)
    this.LoadAnswers = this.LoadAnswers.bind(this)
    this.createAnswer = this.createAnswer.bind(this)
  }
  LoadAnswers(){
    return(
      <div className={styles.AnswersDiv}>
            <h3 className = {styles.a}>Answers:</h3>

            { this.state.Answers.map((answers,i) =>{
              if(answers !== undefined){
                return <Answers answers={answers} key ={i}/>
              }
            })}

            </div>
    )

  }
  LoadAnswersScroll(){
    return(
      <div className={styles.AnswersDivScroll}>
            <h3 className = {styles.a}>Answers:</h3>

            { this.state.Answers.map((answers,i) =>{
              if(answers !== undefined){
                return <><Answers answers={answers} key ={i}/></>
              }
            })}

            </div>
    )
  }
  createAnswer(Abody,arrayOfphotos,email,username){
    var today = new Date();
    var today = today.toISOString();
    console.log()
  var obj = {
      body: Abody,
      name: username,
      email: email,
      photos: arrayOfphotos,

}
  axios.post('/addAnswer', {obj, question_id: this.props.quest.question_id}).then()


  }

  AddAanswerToQuestion(){
    var truth = !this.state.add;
    this.setState({
      add: truth
    })
  }

  renderload(){
    return(
      <button className={styles.load}onClick={this.addAns} >Load more answers</button>
    )
  }

  renderless(){
    return(
      <button className={styles.less} onClick={(event) => {this.less()}}>Hide Answers</button>

    )

  }
  less(){
    var array =[];
    array.push(this.state.AnswersDB[0])
    array.push(this.state.AnswersDB[1])
    this.setState({
      Answers: array,
      scroll: false
    })

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

    this.setState({
      Answers: this.state.AnswersDB,
      scroll: true
    })

  }

Yes(){

if(!this.state.pushed ){
  var num = ++this.state.question_helpfulness
  console.log(num)
  axios.put('/Questionhelpful', {body: this.props.quest.question_id}).then( this.setState({
    pushed: true,
    question_helpfulness: num

  }) )


} else {

  // do nothing
}

}
  componentDidUpdate(prevProps, prevState){
    if(prevProps.quest !== this.props.quest){
      this.rerender()
    }
  }

 componentDidMount(){
  this.rerender()
 }


  render(){

        return(
          <>
          <li className={styles.Qlist}>
            <h3 className={styles.quest}>Question : </h3>
            <div className={styles.questContainer}>
            <p className={styles.questBody}>  {this.props.quest.question_body}  </p>
            </div>
            <div className = {styles.helpDiv}>
            <p className={styles.helpfulQ}>Helpful? </p>
            <button className={styles.buttonQ} onClick={this.Yes}> Yes </button>
            <p className={styles.help}> ({this.state.question_helpfulness}) </p>
            </div>
            <hr></hr>
            {this.state.scroll? this.LoadAnswersScroll() : this.LoadAnswers()}
            <br></br>
            <div className={styles.questbuttons}>
            { this.state.AnswersDB.length > 2 && this.state.AnswersDB.length !== this.state.Answers.length ? this.renderload(): <><button className={styles.invisible}>        </button></>}
            <button className={styles.addAnswerBtn} onClick={(event)=>{this.AddAanswerToQuestion()}}>Add Answers</button>
            <AddAanswer add = {this.state.add} addAans={this.AddAanswerToQuestion} quest={this.props.quest.question_body} createAnswer = {this.createAnswer}/>
             { this.state.Answers.length > 2  ? this.renderless(): null}
             </div>
            </li>
            <br></br>
          </>
        )

  }




}
export default Question

