import React from 'react';
import axios from 'axios';

import AvgRecs from './AvgRecs.jsx';
import ReviewCount from './ReviewCount.jsx';
import List from './List.jsx';
import AvgRatings from './AvgRatings.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import AddReviewButton from './AddReviewButton.jsx';
import WriteYourReview from './WriteYourReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import CharacteristicsSummary from './CharacteristicsSummary.jsx';
import Modal from './Modal.jsx';
import dummyReviewListData from './dummyData/dummyReviewListData.js';
import styles from './reviews.module.css';


class RatingsAndReviewsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      reviewListDisplay: [],
      reviewCount: '',
      currentProductId: this.props.id,
      averageRating: '',
      recsPercentage: 0,
      characteristics: {},
      ratings: {},
      recommended: {},
      totalRatings: 0,
      showModal: false,
    };

    this.getReviews = this.getReviews.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.updateDisplayList = this.updateDisplayList.bind(this);
    this.sendNewReview = this.sendNewReview.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showMoreOnScroll = this.showMoreOnScroll.bind(this);
  }

  getReviews(id) {
    axios.get('/reviews', {
      params: {
        id: id
      }
    })
    .then((response) => {
      this.setState({
        reviewList: response.data.results,
        reviewCount: response.data.results.length
      }, this.updateDisplayList)
    })
    .catch(error => {
      console.error(error)
    });
  }

  getMetadata(id) {
    axios.get('/reviews/meta', {
      params: {
        id: id
      }
    })
    .then((response) => {
      this.setState({
        characteristics: response.data.characteristics,
        recommended: response.data.recommended,
        ratings: response.data.ratings
      }, this.calculateAvgAndPercent)
    })
    .catch(error => {
      console.error(error)
    });
  }

  // updateDisplayList() {
  //   let currentDisplayLength = this.state.reviewListDisplay.length;

  //   if (currentDisplayLength < 2) {
  //     this.setState({
  //       reviewListDisplay: [this.state.reviewList[0], this.state.reviewList[1]]
  //     })
  //   } else if (currentDisplayLength === this.state.reviewList.length) {
  //     return;
  //   } else {
  //     let nextReviews = [];
  //     for (let i = currentDisplayLength; i < currentDisplayLength + 2; i++) {
  //       if (this.state.reviewList[i]) {
  //         nextReviews.push(this.state.reviewList[i])
  //       }
  //     }
  //     this.setState({
  //       reviewListDisplay: [...this.state.reviewListDisplay, ...nextReviews]
  //     })
  //   }
  // }

  // this version loads four upon intitial render and adds two
  updateDisplayList() {
    let currentDisplayLength = this.state.reviewListDisplay.length;

    if (currentDisplayLength < 4) {
      this.setState({
        reviewListDisplay: [this.state.reviewList[0], this.state.reviewList[1], this.state.reviewList[2], this.state.reviewList[3]]
      }, window.addEventListener('scroll', this.showMoreOnScroll))
    } else if (currentDisplayLength === this.state.reviewList.length) {
      return;
    } else {
      let nextReviews = [];
      for (let i = currentDisplayLength; i < currentDisplayLength + 2; i++) {
        if (this.state.reviewList[i]) {
          nextReviews.push(this.state.reviewList[i])
        }
      }
      this.setState({
        reviewListDisplay: [...this.state.reviewListDisplay, ...nextReviews]
      })
    }
  }

  showMoreOnScroll(){
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
        this.updateDisplayList();
    }
}

  calculateAverageRating() {
    let count = 0;
    let avg = 0;

    if (!this.state.ratings) {
      this.setState({averageRating: avg})
    }

    for (var key in this.state.ratings) {
      this.state.ratings[key] = Number(this.state.ratings[key]);
      count += this.state.ratings[key]
      avg += (this.state.ratings[key] * Number(key))
    }

    this.setState({totalRatings: count})
    avg = Math.round(avg/count * 10) / 10
    this.setState({averageRating: avg})
    this.props.getAverageRating(avg);
    return avg;
  }

  calculatePercentageRecommended() {
    let yes = Number(this.state.recommended.true);
    let no = Number(this.state.recommended.false);

    let percentageRec = (yes / (yes + no)) * 100;
    percentageRec = Math.round((percentageRec * 10) / 10)
    this.setState({recsPercentage: percentageRec});
    return percentageRec;
  }

  calculateAvgAndPercent() {
    this.calculateAverageRating();
    this.calculatePercentageRecommended();
  }

  sendNewReview(reviewData) {
    reviewData.product_id = this.state.currentProductId
    axios({
      method: 'post',
      url: '/reviews',
      data: reviewData
    })
    .then(response => {
      console.log(response.data);
      this.hideModal();
    })
    .catch(error => {
      console.error(error)
    })
  }

  showModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

  hideModal() {
    this.setState({showModal: !this.state.showModal});
  };

  componentDidMount() {
    this.getReviews(this.state.currentProductId);
    this.getMetadata(this.state.currentProductId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.getReviews(this.props.id);
      this.getMetadata(this.props.id);
    }
  }

  render() {
    return(
      <div className={styles.reviewsContainer}>
        <h1 className={`${styles.row} ${styles.sectionTitle}`}>RATINGS AND REVIEWS</h1>
        <div className={styles.reviewsGrid}>
          <div className={styles.col}>
            <AvgRatings averageRating={this.state.averageRating}/>
            <AvgRecs recsPercentage={this.state.recsPercentage} />
            <RatingBreakdown totalRatings={this.state.totalRatings} ratings={this.state.ratings} />
            <CharacteristicsSummary characteristics={this.state.characteristics} />
          </div>
          <div className={styles.col}>
            <ReviewCount reviewCount={this.state.reviewCount}/>
            <List reviewList={this.state.reviewListDisplay}/>
            <span className={styles.listButtons}>
              <MoreReviewsButton updateDisplayList={this.updateDisplayList}/>
              <AddReviewButton showModal={this.showModal} handleAddReview={this.handleAddReview}/>
            </span>
          </div>
        </div>
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          <WriteYourReview characteristics={this.state.characteristics} sendNewReview={this.sendNewReview} handleClose={this.hideModal} />
        </Modal>
      </div>
    )
  }
}

export default RatingsAndReviewsSect;