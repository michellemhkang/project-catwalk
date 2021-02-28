import React from 'react';
import Styles from './RelatedProductsSect.module.css';

class RelatedProductsList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 id='RelatedProductsListTitle'>Related Products</h2>
        <ul id={Styles.RelatedProductsList}>
          <li>hello</li>
          <li>I'm</li>
          <li>here</li>
          <li>4</li>
          <li>last</li>
        </ul>
      </div>
    )
  }
}




export default RelatedProductsList;
