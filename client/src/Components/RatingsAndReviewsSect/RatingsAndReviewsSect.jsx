import React from 'react';
import ReviewCount from './ReviewCount.jsx';
import List from './List.jsx';
import dummyReviewListData from './dummyData/dummyReviewListData.js';

class RatingsAndReviewsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      reviewCount: 0,
      CurrentProductId: this.props.id
    };
  }

  getReviews () {
    // http request to server
    // receives with array of objects of reviews for given product
    // updates reviewList state

    // use example data for now
    this.setState({
      reviewList: dummyReviewListData.results,
      reviewCount: this.state.reviewList.length
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return(
      <div>
        <h1>Ratings And Reviews Section</h1>
        <ReviewCount reviewCount={this.state.reviewCount}/>
        <List reviewList={this.state.reviewList}/>
      </div>
    )
  }
}

export default RatingsAndReviewsSect;