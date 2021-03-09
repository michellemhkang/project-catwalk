import React from 'react';
// import threetest from './threetest.module.css';
import threetest from './threetest.module.css'
import axios from 'axios';
import NewEntry from './NewEntry.jsx'

class RelatedProductsList3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentListLeft: 0,
    };
    this.leftbutton = this.leftbutton.bind(this)
    this.rightbutton = this.rightbutton.bind(this)

  }

  leftbutton() {
    console.log(this.state.currentListLeft)
    if(this.state.currentListLeft === 0) {
    } else {
      this.setState({currentListLeft: this.state.currentListLeft + 350})
    }
  }


  rightbutton() {
    if(this.state.currentListLeft <= -(this.props.RelatedProductsList.length*350 - 1400)) {
      console.log(this.state.currentListLeft)
    } else {
      this.setState({currentListLeft: this.state.currentListLeft - 350})
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.RelatedProductsList !== prevProps.RelatedProductsList) {
      this.setState({currentListLeft: 0})
    }
  }

  render() {
    console.log('list of products',this.props.RelatedProductsList)
    console.log('this', this)
    return(
      <div>
        <i className={["fas fa-angle-left fa-3x", threetest.leftbutton].join(' ')} onClick={this.leftbutton}></i>
        <div className={threetest.carousel}>
          <div className={threetest.RelatedProductsHeader}>Related Products</div>
          <div className={threetest.carouselholder}>
            <ul className={threetest.listslider} style={
              {left: `${this.state.currentListLeft}px`}
            }>
            {this.props.RelatedProductsList.map((box, i) => {
              return <NewEntry key={i} entry={box} i={i} changePage={this.props.changePage}/>
            })}
            </ul>
          </div>
        </div>
        <i className={["fas fa-angle-right fa-3x", threetest.rightbutton].join(' ')} onClick={this.rightbutton}></i>
      </div>
    )
  }
}
export default RelatedProductsList3;
