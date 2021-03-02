import React from 'react';
import styles from './test.module.css';
import RelatedProductsSect from './RelatedProductsSect/RelatedProductsSect.jsx'
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx'
import QuestionsAnswersSect from './QuestionsAnswersSect/QuestionsAnswersSect.jsx'
import OverviewSect from './OverviewSect/OverviewSect.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 14931
    };
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