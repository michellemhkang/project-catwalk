import React from 'react'
import styles from './Question.modules.css'
import Answers from './Answers.jsx'
import AddAanswer from './AddAnswer.jsx'

class Question extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    AnswersDB: [],
    Answers: [],
    question_helpfulness: 0,
    pushed: false,
    add: false

    }
    this.addAns= this.addAns.bind(this)
    this.Yes = this.Yes.bind(this)
    this.rerender = this.rerender.bind(this)
    this.less = this.less.bind(this)
    this.renderless = this.renderless.bind(this)
    this.renderload = this.renderload.bind(this)
    this.AddAanswerToQuestion = this.AddAanswerToQuestion.bind(this)
  }

  AddAanswerToQuestion(){
    var truth = !this.state.add;
    console.log('here')
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
      <button className={styles.less} onClick={(event) => {this.less()}}>less</button>

    )

  }
  less(){
    var array =[];
    array.push(this.state.AnswersDB[0])
    array.push(this.state.AnswersDB[1])
    this.setState({
      Answers: array
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
            <div className={styles.AnswersDiv}>
            {this.state.Answers.map((answers,i) =>{
              if(answers !== undefined){
                return <Answers answers={answers} key ={i}/>
              }
            })}
            </div>
            <br></br>
            <div className={styles.questbuttons}>
            { this.state.AnswersDB.length > 2 && this.state.AnswersDB.length !== this.state.Answers.length ? this.renderload(): <><button className={styles.invisible}>        </button></>}
            <button className={styles.addAnswerBtn} onClick={(event)=>{this.AddAanswerToQuestion()}}>Add Answers</button>
            <AddAanswer add = {this.state.add} addAans={this.AddAanswerToQuestion}/>
             { this.state.Answers.length > 2  ? this.renderless(): null}
             </div>
            </li>
            <br></br>
          </>
        )

  }




}
export default Question

