import React from 'react';
import styles from './reviews.module.css';

const Modal = (props) => {
  return (
    !props.show
      ? null
      : <><div className={`${styles.row} ${styles.modal}`} onClick={props.handleClose}>
          <div className={`${styles.modalContent} ${styles.fadeIn}`} onClick={e => e.stopPropagation()}>
              <button className={styles.modalCloseButton} onClick={props.handleClose}><i className={`fas fa-times fa-lg`}></i></button>
              {props.children}
        </div>
        </div>
    <div className={`${styles.mobileAddReview}`}>
          <button className={styles.mobilemodalCloseButton} onClick={props.handleClose}><i className="fas fa-times"></i></button>
          {props.children}
    </div>
    </>
  );
};

export default Modal;