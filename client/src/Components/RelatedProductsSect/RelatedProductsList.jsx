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
  }

  leftbutton(){

  }

  rightbutton(){

  }

  render() {
    {console.log('list', this.props)}
    this.state.RelatedProductsDisplay = this.props.RelatedProductsList.slice(0,5)
    return (
      <div>
        <h2>Related Products</h2>
        <ul id={Styles.RelatedProductsList}>
          <button>left (no func)</button>
           {this.state.RelatedProductsDisplay.map(product => <RelatedProductsEntry key={product.id} prod={product}/> )}
           <button>right (no func)</button>
        </ul>
      </div>
    )
  }
}




export default RelatedProductsList;
