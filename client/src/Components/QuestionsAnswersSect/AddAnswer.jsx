import React from 'react';
import styles from './Question.modules.css';

class AddAnswer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text: '',
      img: null,
      username:'',
      email:''
    }
    this.updateIMG= this.updateIMG.bind(this)
    this.updatetxt = this.updatetxt.bind(this)
    this.emailTxt = this.emailTxt.bind(this)
    this.UsernameTxt = this.UsernameTxt.bind(this)
  }
  UsernameTxt(){
    this.setState({
      username: event.target.value
    })
  }
  emailTxt(){
    this.setState({
      email: event.target.value
    })
  }

  updatetxt(){
    this.setState({
      text: event.target.value
    })
  }

  updateIMG(){
      var array = [];
      array.push(URL.createObjectURL(event.target.files[0]))
      console.log(URL.createObjectURL(event.target.files[0]))
    this.setState({
      img: array
    })
  }
  render(){
    if(!this.props.add){
  return(
    null
    )}

    return (<>
      <div className={styles.imageDiv}>
        <div className={styles.qDiv}>
          <div className={styles.typeB}>
            <form onSubmit={(event) => { event.preventDefault(); this.props.createAnswer( this.state.text , this.state.img, this.state.email, this.state.username) }}>
              <button onClick={(event) => { this.props.addAans() }} className={styles.addX}> ✖ </button>
              <h4> Responding To:</h4>
              <p>{this.props.quest}</p>
              <input value={this.state.email} placeholder={'Email'}onChange={(event)=>{event.preventDefault(); this.emailTxt()}}></input>
      <input value={this.state.username} placeholder={'Username'}onChange={(event)=>{event.preventDefault(); this.UsernameTxt()}}></input>
              <textarea className={styles.AnswerInput} value={this.state.text} onChange={(event)=>{this.updatetxt()}}></textarea>
              <button className={styles.SubmitAnswerbtn}>Submit</button>
              <input type={'file'} onChange={this.updateIMG} />
              <div className={styles.imagePreviewDiv}>
                <img src={this.state.img} className={styles.imagePreviewPic}></img>
                <span className={styles.imagePreviewDivtext}>image Preview</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )



}
}

export default AddAnswer