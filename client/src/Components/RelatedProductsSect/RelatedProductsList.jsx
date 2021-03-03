import React from 'react';
import Styles from './RelatedProductsSect.module.css';
import RelatedProductsEntry from './RelatedProductsEntry.jsx'

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedProductsFullList: this.props.RelatedProductsList,
      RelatedProductsDisplay: [],
      currentViewStart: 0,
      currentViewEnd: 5
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
    if(this.state.currentViewEnd < this.props.RelatedProductsList.length) {
      this.setState({
        currentViewStart: this.state.currentViewStart+1,
        currentViewEnd: this.state.currentViewEnd+1
      })
    } else {
      console.log('already at the end')
    }

  }


  render() {
  {  if(this.props) {
      // console.log(this.state)
      this.state.RelatedProductsDisplay = this.props.RelatedProductsList.slice(this.state.currentViewStart, this.state.currentViewEnd)
    }
  }
  // {console.log('checking props',this.props)}
    return (
      <div>
        <h2 id='RelatedProductsListTitle'>Related Products</h2>
        <ul id={Styles.RelatedProductsList}>
          <div className={Styles.leftArrow} onClick={this.leftbutton}>left</div>
           {this.state.RelatedProductsDisplay.map(product => <RelatedProductsEntry key={product} prod={product} changePage={this.props.changePage} addToCache={this.props.addToCache} cachedinfo={this.props.cachedinfo}/> )}
           <div className={Styles.rightArrow} onClick={this.rightbutton}>right</div>
        </ul>
      </div>
    )
  }
}





export default RelatedProductsList;
