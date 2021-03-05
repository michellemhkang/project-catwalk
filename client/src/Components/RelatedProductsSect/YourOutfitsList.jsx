import React from 'react';
import Styles from './RelatedProductsSect.module.css'
import YourOutfitAddCard from './YourOutfitAddCard.jsx'
import YourOutfitEntry from './YourOutfitEntry.jsx'

class YourOutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YourOutfitsDisplayList: [],
      YourOutfitsFullList: [],
      currentViewStart: 0,
      currentViewEnd: 4
    };
    this.leftbutton = this.leftbutton.bind(this);
    this.rightbutton = this.rightbutton.bind(this);
  }

  leftbutton(){
    // console.log('hello')
    if(this.state.currentViewStart > 0) {
      this.setState({
        currentViewStart: this.state.currentViewStart-1,
        currentViewEnd: this.state.currentViewEnd-1
      })
    } else {
      console.log('already at the start')
    }

  }

  rightbutton(){
    // this.setState({YourOutfitsDisplayList: this.state.YourOutfitsFullList.slice(this.state.currentViewStart+1,this.state.currentViewEnd+1)})
    // console.log(this.state.YourOutfitsDisplayList)
    if(this.state.currentViewEnd < this.state.YourOutfitsFullList.length) {
      this.setState({
        currentViewStart: this.state.currentViewStart+1,
        currentViewEnd: this.state.currentViewEnd+1
      })
    } else {
      console.log('already at the end')
    }

  }
  render() {
    {
      if(this.props) {
        // {console.log(this.state)}
        this.state.YourOutfitsFullList = this.props.YourOutfitsList
        this.state.YourOutfitsDisplayList = this.props.YourOutfitsList.slice(this.state.currentViewStart,this.state.currentViewEnd)
      }
    }
    return (
      <div>
        <h2 id='YourOutfitsListTitle'>Your Outfits</h2>
        <ul id={Styles.RelatedProductsList}>
          <div className={Styles.leftArrow} onClick={this.leftbutton}>left</div>
          <YourOutfitAddCard addToYourOutfits={this.props.addToYourOutfits}/>
           {this.state.YourOutfitsDisplayList.map((product,i) => <YourOutfitEntry key={i} outfitEntry={product}/> )}
           <div className={Styles.rightArrow} onClick={this.rightbutton}>right</div>
        </ul>
      </div>
    )
  }
}

export default YourOutfitsList;
