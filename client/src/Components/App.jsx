import React from 'react';
import styles from './test.module.css';
import RelatedProductsSect from './RelatedProductsSect/RelatedProductsSect.jsx';
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';
import QuestionsAnswersSect from './QuestionsAnswersSect/QuestionsAnswersSect.jsx';
import OverviewSect from './OverviewSect/OverviewSect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 14931,
      avgRating: 0
      productInfo: {},
      styleInfo: []
    };
    this.changePage = this.changePage.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
  };

  changePage(newid) {
    this.setState({id: newid })
    // console.log(this.state);
  }

  getAverageRating(average) {
    this.setState({avgRating: average})
  }

  render() {
    return (
      <div>
        <OverviewSect id={this.state.id} />
        <RelatedProductsSect id={this.state.id} changePage={this.changePage} />
        <QuestionsAnswersSect id={this.state.id} />
        <RatingsAndReviewsSect id={this.state.id} getAverageRating={this.getAverageRating} />
      </div>
    );
  }
}
export default App;