import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx'
import YourOutfitsList from './YourOutfitsList.jsx'
import axios from 'axios';

class RelatedProductsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedProductsList: [],
      YourOutfitsList: [],
      cachedinfo: [],
      previouslyCached : []
    };
    this.addToYourOutfits = this.addToYourOutfits.bind(this);
    this.addToCache = this.addToCache.bind(this);
    this.removeFromYourOutfits = this.removeFromYourOutfits.bind(this);
  }

  addToYourOutfits(id) {
    var found = 0;
    for (let i = 0; i < this.state.YourOutfitsList.length; i++) {
      console.log('a', this.state.YourOutfitsList[i].id, id)
      if(this.state.YourOutfitsList[i].id === id) {
        found += 1
      }
    }
    if(found) {
    } else {
      this.setState({YourOutfitsList: [...this.state.YourOutfitsList, {
        id: this.props.id,
        rating: this.props.avgRating,
        name: this.props.productInfo.name,
        category: this.props.productInfo.category,
        features: this.props.productInfo.features,
        price: this.props.productInfo.default_price,
        img: this.props.styleInfo.photos[0].url,
        sale: this.props.styleInfo.sale_price
      }]})
    }
  }

  removeFromYourOutfits(id) {
    for (let i = 0; i < this.state.YourOutfitsList.length; i++) {
      if(this.state.YourOutfitsList[i].id === id) {
        this.state.YourOutfitsList.splice(i,1);
        this.setState({YourOutfitsList: this.state.YourOutfitsList})
        break;
      }
    }
  }

  addToCache(obj) {
    if(this.state.cachedinfo.filter(product => {product.id === obj.id}).length > 0) {
    } else {
      this.state.cachedinfo.push(obj);
    }
  }

  componentDidMount() {
    axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    .then((res) => {
      this.setState({RelatedProductsList: res.data}
        )}
        )}

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
        .then((res) => {
          this.setState({RelatedProductsList: res.data})
        })
      }
  }
  render() {
      return(
      <div id="firstdiv">
        {/* <h1>Related Products Section</h1> */}
        <RelatedProductsList RelatedProductsList={this.state.RelatedProductsList} changePage={this.props.changePage} addToCache={this.addToCache}
        cachedinfo={this.state.cachedinfo}/>
        <YourOutfitsList YourOutfitsList={this.state.YourOutfitsList} changePage={this.props.changePage} addToCache={this.addToCache}
        cachedinfo={this.state.cachedinfo} addToYourOutfits={this.addToYourOutfits} removeFromYourOutfits={this.removeFromYourOutfits} id={this.props.id}/>
      </div>
    )
  }
}


export default RelatedProductsSect;