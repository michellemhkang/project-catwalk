import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx'
import YourOutfitsList from './YourOutfitsList.jsx'

class RelatedProductsSect extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // {console.log(this.props)}
    return(
    <div>
      <h1>Related Products Section</h1>
      <RelatedProductsList/>
      <YourOutfitsList/>
    </div>
    )
  }
}

export default RelatedProductsSect;