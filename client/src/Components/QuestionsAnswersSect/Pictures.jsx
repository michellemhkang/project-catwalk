import React from 'react';
import styles from './Question.modules.css';

class Pictures extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <img className={styles.image} src={this.props.url}></img>
    )
  }

}

export default Pictures
