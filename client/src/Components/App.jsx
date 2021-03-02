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
      id: 14931
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newid) {
    this.setState({id: newid })
  }

  render() {
    return (
      <div>
        <OverviewSect id={this.state.id}/>
        <RelatedProductsSect id={this.state.id} changePage={this.changePage}/>
        <QuestionsAnswersSect id={this.state.id}/>
        <RatingsAndReviewsSect id={this.state.id}/>
      </div>
    );
  }
}
export default App;