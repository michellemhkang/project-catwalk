import React from 'react';
import Styles from './RelatedProductsSect.module.css';
import RelatedProductsEntry from './RelatedProductsEntry.jsx'

class RelatedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedProductsFullList: this.props.RelatedProductsList,
      RelatedProductsDisplay: []
    };
    this.leftbutton = this.leftbutton.bind(this);
    this.rightbutton = this.rightbutton.bind(this);
  }



  leftbutton(){

  }

  rightbutton(){

  }


  render() {
  {  if(this.props) {
      console.log(this.state)
      this.state.RelatedProductsDisplay = this.props.RelatedProductsList.slice(0,5)
    }
  }
    return (
      <div>
        <h2 id='RelatedProductsListTitle'>Related Products</h2>
        <ul id={Styles.RelatedProductsList}>
          <div className={Styles.leftArrow}>left (no func)</div>
           {this.state.RelatedProductsDisplay.map(product => <RelatedProductsEntry key={product} prod={product} changePage={this.props.changePage}/> )}
           <div className={Styles.rightArrow}>right (no func)</div>
        </ul>
      </div>
    )
  }
}





export default RelatedProductsList;
