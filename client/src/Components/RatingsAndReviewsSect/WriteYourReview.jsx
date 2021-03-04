import React from 'react';
import styles from './reviews.module.css';
import NewStarRating from './NewStarRating.jsx';
import Characteristics from './Characteristics.jsx'

class WriteYourReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      recommend: true,
      summary: '',
      body: '',
      nickname: '',
      email: '',
      characteristics: {}
    }
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(newRating) {
    this.setState({rating: newRating})
  }

  handleRecommendChange(e) {
    this.setState({recommend: e.target.value})
  }

  handleSummaryChange(e) {
    this.setState({summary: e.target.value})
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value})
  }

  handleNicknameChange(e) {
    this.setState({nickname: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  formatCharacteristics() {
    // grab states from characteristics and format to an object
    // you will send this object in with the post request
  }

  handleSubmit(e) {
    let formattedCharacteristics = this.formatCharacteristics();
    let reviewData = {
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      name: this.state.nickname,
      email: this.state.email,
      characteristics: formattedCharacteristics
    }
    this.props.sendNewReview(reviewData);
  }

  render() {
    return (
      <>
      <div className={styles.newReview}>
        <h3 className={styles.newReviewTitle}>WRITE YOUR REVIEW</h3>
        <h4 className={styles.newReviewAbout}>About the product</h4>
        <span className={styles.alignedRow}>
          Rating:
          <NewStarRating handleRatingChange={this.handleRatingChange}/>
        </span>
        <span className={styles.alignedRow}>
          <p>Do you recommend this product?</p>
          <div onChange={this.handleRecommendChange}>
              <label>
                <input
                  type="radio"
                  value="true"
                  checked={this.state.recommend === "true"}
                />
                Yes
            </label>
            <label>
                <input
                  type="radio"
                  value="false"
                  checked={this.state.recommend === "false"}
                />
                No
            </label>
          </div>
         </span>
        <Characteristics characteristics={this.props.characteristics} />
        <div className={styles.reviewInput}>
            Review Summary:
            <input type="text" placeholder="Example: 'Best Purchase Ever!'" value={this.state.summary} onChange={this.handleSummaryChange} />
        </div>
        <div className={styles.reviewInput}>
          Review Body:
          <textarea
            cols="30" rows="5"
            placeholder="'Why did you like the product or not?'"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        </div>
        <div className={styles.inlineForm}>
            Nickname:
            <input className={styles.nickname} type="text" placeholder="Nickname" value={this.state.nickname} onChange={this.handleNicknameChange} />
            Email:
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className={styles.buttonRow}>
      <button className={`${styles.button} ${styles.submitReviewButton}`} onClick={this.handleSubmit}>Submit</button>
     </div>
      </div>

     </>
    )
  }
}

export default WriteYourReview;