import React from 'react';
import styles from './test.module.css';
import RelatedProductsSect from './RelatedProductsSect/RelatedProductsSect.jsx';
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';
import QuestionsAnswersSect from './QuestionsAnswersSect/QuestionsAnswersSect.jsx';
import OverviewSect from './OverviewSect/OverviewSect.jsx';
import axios from 'axios';
import authKey from '../../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 14931,
      productInfo: {},
      styleInfo: []
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newid) {
    this.setState({id: newid })
    // console.log(this.state);
  }


  render() {

    return (
      <div>
        <OverviewSect id={this.state.id} />
        <RelatedProductsSect id={this.state.id} changePage={this.changePage} />
        <QuestionsAnswersSect id={this.state.id} />
        <RatingsAndReviewsSect id={this.state.id} />
      </div>
    );
  }
}
export default App;