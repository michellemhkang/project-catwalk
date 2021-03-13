import React from 'react';

import styles from './reviews.module.css';

let AddReviewButton = (props) => {
  return (
    <button className={`${styles.button} ${styles.addNewButton}`}data-test="addReviewButton" onClick={props.showModal}>ADD A REVIEW +</button>
  )
}

export default AddReviewButton;
