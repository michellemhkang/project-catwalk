import React from 'react'
import Question from './Question.jsx'
import styles from './Question.modules.css';


class QnAlist extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <>
        <div className={styles.List}>
        <ul >
        {this.props.QnAlist.map((quest,i) => {
          return <Question quest={quest} key={i} />
        })}
        </ul>
        <br></br>
        </div>
      </>

    )


  }


}
export default QnAlist