import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx'
import YourOutfitsList from './YourOutfitsList.jsx'
import axios from 'axios';

class RelatedProductsSect extends React.Component {
  constructor() {
    super();
    this.state = {
      RelatedProductsList: [],
      YourOutfitsList: []
    };
  }

    // axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    //   .then(res => console.log(res.data))


  render() {
    {axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    .then((res) => console.log(res.data))}
    {console.log(this.props)}
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