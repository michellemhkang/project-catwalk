import React from 'react';
import styles from './test.module.css';
import RelatedProductsSect from './RelatedProductsSect/RelatedProductsSect.jsx'
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx'
import QuestionsAnswersSect from './QuestionsAnswersSect/QuestionsAnswersSect.jsx'
import OverviewSect from './OverviewSect/OverviewSect.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayOfId: [],
      id: 0
    };
  }
  componentDidMount(){
    axios.get('/api/data').then(response => {
      var array = [];
      for(var i = 0; i < response.data.length; i++ ){
        array.push(response.data[i].id)
      }
      this.setState({
        arrayOfId: array,
        id: array[0]
      })

    })

  }
  render() {
    return (
      <div>
        <OverviewSect id={this.state.id}/>
        <RelatedProductsSect id={this.state.id}/>
        <QuestionsAnswersSect id={this.state.id}/>
        <RatingsAndReviewsSect id={this.state.id}/>
      </div>
    );
  }
}
export default App;