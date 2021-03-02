import React from 'react';
import axios from 'axios';
import QnAlist from './Q&AList.jsx';
import styles from './Question.modules.css';

class QuestionsAnswersSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      QnAlist:[],
      QnADB: [],
      Filter:''
    };
    this.changefilter = this.changefilter.bind(this);
    this.MoreQuestions = this.MoreQuestions.bind(this);
    this.SearchQnA = this.SearchQnA.bind(this);
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
    for(var i = 0; i < this.state.QnAlist.length + 2; i++ ){

      if(this.state.QnADB[i] !== undefined){
      array.push(this.state.QnADB[i])
      }
    }

    this.setState({
      QnAlist: array
    })
  }


  componentDidMount(){
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
      <QnAlist QnAlist ={this.state.QnAlist}/>
      <button onClick={this.MoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION</button>
      </>
    )
  }
}

export default QuestionsAnswersSect;