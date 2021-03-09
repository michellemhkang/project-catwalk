import React from 'react';
// import threetest from './threetest.module.css';
import threetest from './threetest.module.css'
import axios from 'axios';
import NewEntry from './NewEntry.jsx'
import YourOutfitAddCard from './YourOutfitAddCard.jsx'

class YourOutfitsList2 extends React.Component {
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
    if(this.state.currentListLeft <= -(this.props.YourOutfitsList.length*350 - 1150)) {
      console.log(this.state.currentListLeft)
    } else {
      this.setState({currentListLeft: this.state.currentListLeft - 350})
    }
  }

  render() {
    return(
      <div>
        <i className={["fas fa-angle-left fa-3x", threetest.leftbutton].join(' ')} onClick={this.leftbutton}></i>
        <div className={threetest.carousel}>
          <div className={threetest.RelatedProductsHeader}>Your Outfits</div>
          <div className={threetest.carouselholder}>
            <ul className={threetest.listslider} style={
              {left: `${this.state.currentListLeft}px`}
            }>
              <YourOutfitAddCard addToYourOutfits={this.props.addToYourOutfits} />
            {this.props.YourOutfitsList.map((entry, i) => {
              return <NewEntry key={i+1} entry={entry} i={i+1} changePage={this.props.changePage}/>
            })}
            </ul>
          </div>
        </div>
        <i className={["fas fa-angle-right fa-3x", threetest.rightbutton].join(' ')} onClick={this.rightbutton}></i>
      </div>
    )
  }
}
export default YourOutfitsList2;