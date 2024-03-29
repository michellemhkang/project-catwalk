import React from 'react';
import styles from './Question.modules.css';

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }



  render() {
    if(!this.props.show){
      return null
    }
    return <>
    <div className ={styles.imageDiv} >
      <div className ={`${styles.imageModal} ${styles.fadeIn}`}>
      <button onClick={(event)=>{this.props.selectModal() }} className={styles.Mbutton} > ✖ </button>
      <div className={styles.borderDiv}><div className={styles.container}><img className={styles.imageM} src={this.props.url} /></div></div>
      </div>
      </div>
      </>
  }
}

export default Modal