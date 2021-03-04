import React from 'react';
import Styles from './RelatedProductsSect.module.css'
import YourOutfitAddCard from './YourOutfitAddCard.jsx'
import YourOutfitEntry from './YourOutfitEntry.jsx'

class YourOutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YourOutfitsDisplayList: [],
      YourOutfitsFullList: []
    };
  }

  render() {
    {
      if(this.props) {
        this.state.YourOutfitsDisplayList = this.props.YourOutfitsList.slice(0,4)
      }
    }
    return (
      <div>
        <h2 id='YourOutfitsListTitle'>Your Outfits</h2>
        <ul id={Styles.RelatedProductsList}>
          <button className={Styles.leftArrow}>left (no func)</button>
          <YourOutfitAddCard addToYourOutfits={this.props.addToYourOutfits}/>
           {this.state.YourOutfitsDisplayList.map(product => <YourOutfitEntry key={product.id} outfitEntry={product}/> )}
           <button className={Styles.rightArrow}>right (no func)</button>
        </ul>
      </div>
    )
  }
}

export default YourOutfitsList;
