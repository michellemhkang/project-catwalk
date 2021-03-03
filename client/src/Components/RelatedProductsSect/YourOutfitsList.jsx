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
    this.leftbutton = this.leftbutton.bind(this);
    this.rightbutton = this.rightbutton.bind(this);
  }

  leftbutton(){
    console.log('hello')
  }

  rightbutton(){
    console.log('goodbye')
  }
  render() {
    {
      if(this.props) {
        {console.log(this.state)}
        this.state.YourOutfitsFullList = this.props.YourOutfitsList
        this.state.YourOutfitsDisplayList = this.props.YourOutfitsList.slice(0,4)
      }
    }
    return (
      <div>
        <h2 id='YourOutfitsListTitle'>Your Outfits</h2>
        <ul id={Styles.RelatedProductsList}>
          <div className={Styles.leftArrow} onClick={this.leftbutton}>left</div>
          <YourOutfitAddCard addToYourOutfits={this.props.addToYourOutfits}/>
           {this.state.YourOutfitsDisplayList.map(product => <YourOutfitEntry key={product.id} outfitEntry={product}/> )}
           <div className={Styles.rightArrow} onClick={this.rightbutton}>right</div>
        </ul>
      </div>
    )
  }
}

export default YourOutfitsList;
