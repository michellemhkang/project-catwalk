import React from 'react';
// import RelatedProductsSection from './RelatedProductsSection.module.css';
import RelatedProductsSection from './RelatedProductsSection.module.css'
import axios from 'axios';
import NewEntry from './NewEntry.jsx'

class RelatedProductsList extends React.Component {
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
    return(
      <div>
        <i className={["fas fa-angle-left fa-3x", RelatedProductsSection.leftbutton].join(' ')} onClick={this.leftbutton}></i>
        <div className={RelatedProductsSection.carousel}>
          <div className={RelatedProductsSection.RelatedProductsHeader}>Related Products</div>
          <div className={RelatedProductsSection.carouselholder}>
            <ul className={RelatedProductsSection.listslider} style={
              {left: `${this.state.currentListLeft}px`}
            }>
            {this.props.RelatedProductsList.map((box, i) => {
              return <NewEntry key={i} entry={box} i={i} changePage={this.props.changePage} cardType='Compare'/>
            })}
            </ul>
          </div>
        </div>
        <i className={["fas fa-angle-right fa-3x", RelatedProductsSection.rightbutton].join(' ')} onClick={this.rightbutton}></i>
      </div>
    )
  }
}
export default RelatedProductsList;
