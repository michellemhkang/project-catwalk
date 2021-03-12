import React from 'react';
import axios from 'axios';
import QnAlist from './Q&AList.jsx';
import styles from './Question.modules.css';
import AddQustion from './AddQuestion.jsx';

class QuestionsAnswersSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QnAlist: [],
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
    this.less = this.less.bind(this)
    this.lessQuestions = this.lessQuestions.bind(this)
  }

  lessQuestions(){
    var array = [];
      array.push(this.state.QnADB[0])
      array.push(this.state.QnADB[1])
      this.setState({
        QnAlist: array
      })
  }

  less(){
    return(
    <button className={styles.lessQ} onClick={(event) => {this.lessQuestions()}}>Colapse questions</button>
    )
  }

  SubmitQuestion(question, email, username){

    var NewQuestion = {
            body: question,
            name: username,
            email: email,
            product_id:this.props.id
    }

    axios.post('/addQuestion', NewQuestion).then(this.rerender());
  }


  AddQuestion(){
    var truth = !this.state.Add
    this.setState({
      Add: truth
    })
  }

  rerender(){
    axios.get('/Q&A/data',{ params: {
      id: this.props.id
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
    console.log(this.state.QnAlist[currentLength - 1].question_id)
    console.log(this.state.QnADB[currentLength-1].question_id)

    while(currentLength < this.state.QnAlist.length + 2){
      if(this.state.QnADB[currentLength] !== undefined ){
        array.push(this.state.QnADB[currentLength])
      }
      currentLength++
    }
      console.log('list',this.state.QnAlist)
      console.log('db',this.state.QnADB)
    this.setState({
      QnAlist: [...this.state.QnAlist, ...array]
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.id !== this.props.id){
      this.rerender()
    }


  }

  componentDidMount(){
    this.rerender();
  }

  changefilter(){
    this.setState({
      Filter: event.target.value
    })
  if(event.target.value.length > 2 || event.target.value === ''){
    this.SearchQnA()
  }

  }


  render() {

    return(
      <>
      <hr className={styles.Qhr}></hr>
      <div className={styles.tittle}>
        <h1>Customer Questions & Answers</h1>
      </div>
      <div className ={styles.searchborderQ}>
      <form className={styles.formsearch} onSubmit={(event)=>{event.preventDefault(); this.SearchQnA()}}>
        <input value={this.state.Filter} placeholder={'HAVE A QUESTION? SEARCH FOR ANSWERS...'} onChange={(event)=>{event.preventDefault(); this.changefilter()}} className={styles.SearchQnA} ></input>
        <button className={styles.searhGlass}> 🔍 </button>
      </form>
      </div>
      <div className={styles.pagebody}>
      <QnAlist QnAlist ={this.state.QnAlist} />
      <AddQustion Add={this.state.Add} AddQuestion={this.AddQuestion} SubmitQuestion={this.SubmitQuestion}/>
      <button onClick={this.MoreQuestions} className={styles.MoreQue}>MORE ANSWERED QUESTIONS</button>
      <button onClick={(event)=>{this.AddQuestion()}} className={styles.Addque}>ADD A QUESTION</button>
      {this.state.QnAlist.length > 2 ? this.less() : null}
      </div>
      <br></br>
      <hr className={styles.Qhr}></hr>
      </>
    )
  }
}

export default QuestionsAnswersSect;