import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitsList from './YourOutfitsList.jsx';
import axios from 'axios';
import RelatedProductsSection from './RelatedProductsSection.module.css'

class RelatedProductsSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RelatedProductsList: [],
      YourOutfitsList: [],
      viewable: false
    };
    this.addToYourOutfits = this.addToYourOutfits.bind(this);
    this.removeFromYourOutfits = this.removeFromYourOutfits.bind(this);
  }

  addToYourOutfits(id) {
    var found = 0;
    for (let i = 0; i < this.state.YourOutfitsList.length; i++) {
      if(this.state.YourOutfitsList[i].id === id) {
        found += 1
      }
    }
    if(!found) {
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

  componentDidMount() {
    axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    .then((res) => {
      this.setState({RelatedProductsList: res.data,
      viewable:true}
        )}
        )}

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      // this.setState({viewable: false})
      axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
        .then((res) => {
          this.setState({RelatedProductsList: res.data,
          viewable: true})
        })
      }
  }
  render() {
    if(this.state.viewable === true) {
      return(
        <div>
          {/* <h1>Related Products Section</h1> */}
          <RelatedProductsList RelatedProductsList={this.state.RelatedProductsList} changePage={this.props.changePage}/>
          <YourOutfitsList YourOutfitsList={this.state.YourOutfitsList} changePage={this.props.changePage} addToYourOutfits={this.addToYourOutfits} removeFromYourOutfits={this.removeFromYourOutfits} id={this.props.id}/>
        </div>
      )
    } else {
      return(
        <div>Loading</div>
      )
    }

  }
}



export default RelatedProductsSect;
