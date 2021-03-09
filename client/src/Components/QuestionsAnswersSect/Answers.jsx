import React from 'react'
import styles from './Question.modules.css'
import Pictures from './Pictures.jsx'
import axios from 'axios'

class Answers extends React.Component{
  constructor(props){
    super(props)
    this.state={
      helpfulness: this.props.answers.helpfulness,
      pushed: false

    }
    this.Yes = this.Yes.bind(this)
    this.formatDate = this.formatDate.bind(this);
  }


formatDate(isoDate){
  let date = new Date(isoDate);
    let months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }

    let month = (date.getMonth() + 1).toString();
    date = `${months[month]} ${date.getDate()}, ${date.getFullYear()}`;
    return date;
}

  Yes(){
    if(!this.state.pushed ){
      var num = ++this.state.helpfulness
      axios.put('/Answerhelpful', {body: this.props.answers.id}).then(this.setState({
        helpfulness: num,
        pushed: true
      }))
    } else {

    }
  }


  render(){
    return (
      <>
      <br></br>
      <div className={styles.backgroundA}>
      <div>
        <div>
      </div>
      <p className={styles.answer}>{this.props.answers.body}</p>
      </div>
      <br></br>
        {this.props.answers.photos.map((url,i)=>{
          return <Pictures url={url} key={i}/>
        })}
        <br></br>
        <br></br>
      <p className={styles.userbyA}>by {this.props.answers.answerer_name} on {this.formatDate(this.props.answers.date.toString())} </p>
      <p className={styles.help} >| Helpful? </p>
      <button className={styles.buttonQ} onClick={this.Yes}> Yes </button> <p className={styles.helpNum}>({this.state.helpfulness})</p>
      <br></br>
      <br></br>
      </div>
      </>
    )
  }
}
export default Answers