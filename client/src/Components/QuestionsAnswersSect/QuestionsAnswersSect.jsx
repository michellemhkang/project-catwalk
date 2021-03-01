import React from 'react';
import axios from 'axios';

class QuestionsAnswersSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      QnAlist:[],
      QnADB: [],
      Filter:''
    };
    this.changefilter = this.changefilter.bind(this)
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
    console.log(this.state.QnADB)
    console.log(this.state.QnAlist)

    return(
      <>
      <h1>Questions Answers Section</h1>
      <form>
        <input value={this.state.Filter} placeholder={'HAVE A QUESTION? SEARCH FOR ANSWERS...'} onChange={(event)=>{event.preventDefault(); this.changefilter()}} ></input>
        <button> Q </button>
      </form>
      <p>{this.state.id}</p>
      </>
    )
  }
}

export default QuestionsAnswersSect;