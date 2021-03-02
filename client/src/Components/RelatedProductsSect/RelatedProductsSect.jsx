import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx'
import YourOutfitsList from './YourOutfitsList.jsx'
import axios from 'axios';

class RelatedProductsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedProductsList: [],
      YourOutfitsList: []
    };
  }

  addToYourOutfits(itemid) {
    this.setState({YourOutfitsList: [...this.state.YourOutfitsList, itemid]})
  }

  componentDidMount() {
    axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    .then((res) => {
      this.setState({RelatedProductsList: res.data})
    })
  }

  render() {
    return(
    <div>
      <h1>Related Products Section</h1>
      <RelatedProductsList RelatedProductsList={this.state.RelatedProductsList}/>
      <YourOutfitsList/>
    </div>
    )
  }
}

export default RelatedProductsSect;