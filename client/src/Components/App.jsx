import React from 'react';
import styles from './test.module.css';
import RelatedProductsSect from './RelatedProductsSect/RelatedProductsSect.jsx'
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx'
import QuestionsAnswersSect from './QuestionsAnswersSect/QuestionsAnswersSect.jsx'
import OverviewSect from './OverviewSect/OverviewSect.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <OverviewSect/>
        <QuestionsAnswersSect/>
        <RatingsAndReviewsSect/>
        <RelatedProductsSect/>
      </div>
    );
  }
}
export default App;