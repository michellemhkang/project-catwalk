import React from 'react';
import axios from 'axios';
import QnAlist from './Q&AList.jsx';
import styles from './Question.modules.css';
import AddQustion from './AddQuestion.jsx';

class QuestionsAnswersSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      QnAlist:[],
      QnADB: [],
      Filter:'',
      Add: false
    };
    this.changefilter = this.changefilter.bind(this);
    this.MoreQuestions = this.MoreQuestions.bind(this);
    this.SearchQnA = this.SearchQnA.bind(this);
    this.rerender = this.rerender.bind(this);
    this.AddQuestion = this.AddQuestion.bind(this);
    this.SubmitQuestion = this.SubmitQuestion.bind(this)
  }

  SubmitQuestion(question){
    var today = new Date();
    var today = today.toISOString();
    var NewQuestion = {
      question_id: this.state.QnADB[0].question_id + 1,
            question_body: question,
            question_date: today,
            asker_name: "Ransom.Thiel83",
            question_helpfulness: 30,
            reported: false,
            answers: {}
    }
    NewQuestion

    this.setState({
      QnAlist:[...this.state.QnAlist, NewQuestion],
      QnADB: [...this.state.QnADB, NewQuestion]
    })

  }


  AddQuestion(){
    var truth = !this.state.Add
    this.setState({
      Add: truth
    })
  }

  rerender(){
    axios.get('/Q&A/data',{ params: {
      id: this.state.id
    }}).then(response => {
      var array = [];
      array.push(response.data.results[0]);
      array.push(response.data.results[1]);
      this.setState({
      QnADB: response.data.results,
      QnAlist: array
    })})
  }

  SearchQnA(){
    if(this.state.Filter === ''){
      var array = [];
      array.push(this.state.QnADB[0])
      array.push(this.state.QnADB[1])
      this.setState({
        QnAlist: array
      })
    }else {
    var array = [];
    for(var i = 0; i < this.state.QnADB.length; i++){
      if(this.state.QnADB[i].question_body.includes(this.state.Filter)){
        array.push(this.state.QnADB[i])
      }
    }

    this.setState({
      QnAlist:array
    })
  }
  }

  MoreQuestions(){
      var array = []
      var currentLength = this.state.QnAlist.length

    while(currentLength < this.state.QnAlist.length + 2 ){
      if(this.state.QnADB[currentLength] !== undefined){
        array.push(this.state.QnADB[currentLength])
      }
      currentLength++
    }

    this.setState({
      QnAlist: [...this.state.QnAlist, ...array]
    })
  }


  componentDidMount(){
    this.rerender();
  }

  changefilter(){
    this.setState({
      Filter: event.target.value
    })

  }


  render() {

    return(
      <>
      <h1>Questions Answers Section</h1>

      <form  onSubmit={(event)=>{event.preventDefault(); this.SearchQnA()}}>
        <input value={this.state.Filter} placeholder={'HAVE A QUESTION? SEARCH FOR ANSWERS...'} onChange={(event)=>{event.preventDefault(); this.changefilter()}} className={styles.SearchQnA} ></input>
        <button className={styles.searhGlass}> Q </button>
      </form>
      <QnAlist QnAlist ={this.state.QnAlist} />
      <AddQustion Add={this.state.Add} AddQuestion={this.AddQuestion} SubmitQuestion ={this.SubmitQuestion}/>
      <button onClick={this.MoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button onClick={(event)=>{this.AddQuestion()}}>ADD A QUESTION</button>
      </>
    )
  }
}

export default QuestionsAnswersSect;