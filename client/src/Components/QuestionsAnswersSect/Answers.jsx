import React from 'react'
import styles from './Question.modules.css'
import Pictures from './Pictures.jsx'

class Answers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      helpfulness: this.props.answers.helpfulness,
      pushed: false

    }
    this.Yes = this.Yes.bind(this)
  }
  Yes(){
    if(!this.state.pushed ){
      var truth = !this.state.pushed
      var num = this.state.helpfulness + 1
      this.setState({
        pushed: truth,
        helpfulness: num
      })
    } else {
      var truth = !this.state.pushed
      var num = this.state.helpfulness - 1
      this.setState({
        pushed: truth,
        helpfulness: num
      })
    }


  }


  render(){

    const event = new Date(this.props.answers.date);
    var date = event.toString().substring(0,16);

    return (
      <>
      <div>
      <h2 className = {styles.a}>A:</h2> <p className={styles.answer}>{this.props.answers.body}</p>
      </div>
        {this.props.answers.photos.map((url,i)=>{
          return <Pictures url={url} key={i}/>
        })}
        <br></br>
      <p className={styles.userbyA}>by {this.props.answers.answerer_name} on {date} </p>
      <p className={styles.help} >| Helpful? </p>
      <button className={styles.button} onClick={this.Yes}> Yes </button> <p className={styles.helpNum}>({this.state.helpfulness})</p>
      <br></br>
      </>
    )
  }
}
export default Answers