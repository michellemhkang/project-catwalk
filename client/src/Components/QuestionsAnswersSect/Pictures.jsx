import React from 'react';
import styles from './Question.modules.css';
import Modal from './Modal.jsx';
class Pictures extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show: false
    }
    this.ChangeShow = this.ChangeShow.bind(this);
    this.selectModal = this.selectModal.bind(this)
  }
  ChangeShow(){
    this.setState({
      show: true
    })
  }
  selectModal(){
    this.setState({show: !this.state.show})
  }

  render(){
    return(
      <>
      <a onClick={(event)=>{this.ChangeShow() }}><img className={styles.image} src={this.props.url} /></a>
      <Modal show = {this.state.show} selectModal={this.selectModal} url={this.props.url}/>
      </>
    )
  }

}

export default Pictures
