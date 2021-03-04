import React from 'react'
import Question from './Question.jsx'

class QnAlist extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){

    return (
      <>
        <ul>
        {this.props.QnAlist.map((quest,i) => {
          return <Question quest={quest} key={i}/>
        })}
        </ul>
        <br></br>
      </>

    )


  }


}
export default QnAlist