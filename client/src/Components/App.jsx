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
      avgRating: 0,
      productInfo: {},
      styleInfo: {}
    };
    this.changePage = this.changePage.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStyleInfo = this.getStyleInfo.bind(this);
  };

  changePage(newid) {
    this.setState({id: newid})
    // console.log(this.state);
  }

  getAverageRating(average) {
    this.setState({avgRating: average})
  }

  getProductInfo(someInfo) {
    this.setState({productInfo: someInfo})
  }

  getStyleInfo(styleInfo) {
    this.setState({styleInfo: styleInfo})
  }

  render() {
    return (
      <div>
        <OverviewSect id={this.state.id} getProductInfo={this.getProductInfo} getStyleInfo={this.getStyleInfo} />
        <RelatedProductsSect id={this.state.id} changePage={this.changePage} />
        <QuestionsAnswersSect id={this.state.id} />
        <RatingsAndReviewsSect id={this.state.id} getAverageRating={this.getAverageRating} />
      </div>
    );
  }
}
export default App;