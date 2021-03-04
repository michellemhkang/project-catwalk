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
      // productInfo: {},
      // styleInfo: []
    };
    this.changePage = this.changePage.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    // this.getProductInfo = this.getProductInfo.bind(this);
    // this.getStyleInfo = this.getStyleInfo.bind(this);
  }

  changePage(newid) {
    this.setState({ id: newid })
  }

  getAverageRating(average) {
    this.setState({avgRating: average})
  }

  // getProductInfo(productId) {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}`, {
  //     headers:
  //       {Authorization: `${authKey.key}`}
  //   })
  //     .then((response) => {
  //       this.setState({
  //         id: productId,
  //         productInfo: response.data})
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // };

  // getStyleInfo(productId) {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}`, {
  //     headers:
  //     {Authorization: `${authKey.key}`}
  //   })
  //   .then((response) => {
  //     this.setState({
  //       styleInfo: response.data.results})
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  // From Postman-------
  // If we do it using Postman's, we could possibly store config and reuse it for both product and styles request
  // To keep code more dry
  // var config = {
  //   method: 'get',
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931',
  //   headers: {
  //     'Authorization': authKey.key
  //   }
  // };

  // axios(config)
  // .then(function (response) {
  //   // console.log(JSON.stringify(response.data));
  //   console.log(response.data);
  //   this.setState({
  //     productInfo: response.data
  //   })
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // --------------------

  render() {
    // this.getProductInfo(productId = 14931);
    // this.getStyleInfo(productId = 14931);
    // I was thinking we could have state id equal to a default productId and this default parameter be this.state.id,
    // Or have state id equal to null and this default parameter as it is right now

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