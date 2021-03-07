import React from 'react';
import styles from './reviews.module.css';

const Modal = (props) => {
  return (
    !props.show
      ? null
      : <div className={`${styles.row} ${styles.modal}`}>
          <div className={styles.modalContent}>
            {/* <div className={styles.modalActions}> */}
              <button className={styles.modalCloseButton} onClick={props.handleClose}><i className="fas fa-times"></i></button>
            {/* </div> */}
              {props.children}
          </div>
        </div>
  );
};

export default Modal;