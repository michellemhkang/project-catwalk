import React from 'react';
import RelatedProductsSection from './RelatedProductsSection.module.css'
import axios from 'axios';
import NewEntry from './NewEntry.jsx'
import YourOutfitAddCard from './YourOutfitAddCard.jsx'

class YourOutfitsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentListLeft: 0,
    };
    this.leftbutton = this.leftbutton.bind(this)
    this.rightbutton = this.rightbutton.bind(this)
  }



  leftbutton() {
    if(this.state.currentListLeft === 0) {
    } else {
      this.setState({currentListLeft: this.state.currentListLeft + 350})
    }
  }


  rightbutton() {
    if(this.state.currentListLeft <= -(this.props.YourOutfitsList.length*350 - 1150)) {
    } else {
      this.setState({currentListLeft: this.state.currentListLeft - 350})
    }
  }

  render() {
    return(
      <div>
        <i className={["fas fa-angle-left fa-3x", RelatedProductsSection.leftbutton].join(' ')} onClick={this.leftbutton}></i>
        <div className={RelatedProductsSection.carousel}>
          <div className={RelatedProductsSection.RelatedProductsHeader}>Your Outfits</div>
          <div className={RelatedProductsSection.carouselholder}>
            <ul className={RelatedProductsSection.listslider} style={
              {left: `${this.state.currentListLeft}px`}
            }>
              <YourOutfitAddCard addToYourOutfits={this.props.addToYourOutfits} id={this.props.id}/>
            {this.props.YourOutfitsList.map((entry, i) => {
              return <NewEntry key={i+1} entry={entry} i={i+1} changePage={this.props.changePage} removeFromYourOutfits={this.props.removeFromYourOutfits} cardType='Outfits'/>
            })}
            </ul>
          </div>
        </div>
        <i className={["fas fa-angle-right fa-3x", RelatedProductsSection.rightbutton].join(' ')} onClick={this.rightbutton}></i>
      </div>
    )
  }
}
export default YourOutfitsList;