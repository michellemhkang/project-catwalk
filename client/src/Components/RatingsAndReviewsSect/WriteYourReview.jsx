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
      ratedCharacteristics: []
    }
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.updateCharacteristic = this.updateCharacteristic.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(newRating) {
    this.setState({rating: newRating})
  }

  handleRecommendChange(e) {
    this.setState({recommend: e.target.value})
  }

  handleFormChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  updateCharacteristic(userCharObject) {
    this.setState({ratedCharacteristics: [userCharObject, ...this.state.ratedCharacteristics]});
  }

  handleSubmit(e) {
    let recommendBool = this.state.recommend === 'true';
    let characteristics = Object.assign({}, ...this.state.ratedCharacteristics);
    let reviewData = {
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: recommendBool,
      name: this.state.nickname,
      email: this.state.email,
      characteristics: characteristics
    }
    this.props.sendNewReview(reviewData);
  }

  render() {
    return (
      <>
      <div className={`${styles.newReview} ${styles.col}`}>
          <h3 className={styles.newReviewTitle}>WRITE YOUR REVIEW</h3>
          <h5 className={`${styles.newReviewTitle} ${styles.newReviewSubtitle}`}>Share Your Experience</h5>
        <span className={`${styles.row} ${styles.center}`}>
          <p className={styles.smallText}>Rating:</p>
          <NewStarRating handleRatingChange={this.handleRatingChange}/>
        </span>
        <span className={`${styles.row} ${styles.center}`}>
          <p className={styles.smallText}>Do you recommend this product?</p>
          <div className={`${styles.center} ${styles.recText}`} required onChange={this.handleRecommendChange}>
                <input
                  type="radio"
                  value="true"
                  checked={this.state.recommend === "true"}
                />
              <label className={styles.smallText}> Yes</label>
                <input
                  type="radio"
                  value="false"
                  checked={this.state.recommend === "false"}
                />
               <label className={styles.smallText}> No </label>
          </div>
        </span>
        <Characteristics updateCharacteristic={this.updateCharacteristic} characteristics={this.props.characteristics} />
        <div className={styles.sumAndBody}>
        <div className={`${styles.reviewInput} ${styles.textInput}`}>
          <div className={styles.reviewLabelCol}>Review Summary:</div>
          <div className={styles.reviewInputCol}>
            <input type="text" placeholder="Example: 'Best Purchase Ever!'" value={this.state.summary} name="summary" onChange={this.handleFormChange} />
            </div>
        </div>
        <div className={`${styles.reviewInput} ${styles.textInput}`}>
        <div className={styles.reviewLabelCol}>Review Body:</div>
          <div className={styles.reviewInputCol}>
            <textarea
              placeholder="'Why did you like the product or not?'"
              value={this.state.body}
              minLength="50"
              maxLength="1000"
              required
              name="body" onChange={this.handleFormChange}
            />
          </div>
        </div>
        </div>
        {/* <div className={`${styles.row} ${styles.center} ${styles.inlineForm} ${styles.textInput}`}> */}
        <div className={`${styles.reviewInput} ${styles.textInput}`}>
          <div className={styles.reviewLabelCol}>Nickname:</div>
          <div className={styles.reviewInputCol}>
            <input type="text" placeholder="Nickname" name="nickname" value={this.state.nickname} required onChange={this.handleFormChange} />
          </div>
        </div>
        <div className={`${styles.reviewInput} ${styles.textInput}`}>
          <div className={styles.reviewLabelCol}>Email:</div>
          <div className={styles.reviewInputCol}>
            <input type="email" placeholder="Email" value={this.state.email} required name="email" onChange={this.handleFormChange} />
          </div>
        </div>
        <div className={styles.buttonRow}>
      <button className={`${styles.button} ${styles.submitReviewButton}`} onClick={this.handleSubmit}>SUBMIT</button>
     </div>
      </div>

     </>
    )
  }
}

export default WriteYourReview;