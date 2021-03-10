import React from 'react';
import RelatedProductsList from './RelatedProductsList.jsx'
import RelatedProductsList2 from './RelatedProductsList2.jsx'
import RelatedProductsList3 from './RelatedProductsList3.jsx'
import YourOutfitsList from './YourOutfitsList.jsx'
import YourOutfitsList2 from './YourOutfitsList2.jsx'
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
  }

  addToYourOutfits() {
    this.setState({YourOutfitsList: [...this.state.YourOutfitsList, {id: this.props.id, rating: this.props.avgRating}]})
    console.log('a', this.state.YourOutfitsList)
  }

  addToCache(obj) {
    if(this.state.cachedinfo.filter(product => {product.id === obj.id}).length > 0) {
    } else {
      this.state.cachedinfo.push(obj);
      // console.log('cache', this.state.cachedinfo);
    }
  }

  // componentDidMount() {
  //   axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
  //   .then((res) => {
  //     this.setState({RelatedProductsList: res.data}
  //     })
  //   })
  // }

  componentDidUpdate() {
    {
      if(!this.state.previouslyCached.includes(this.props.id)){
        this.state.previouslyCached.push(this.props.id)
        axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
        .then((res) => {
          console.log(res.data)
          this.setState({RelatedProductsList: res.data})
        })
      }
    }
  }

  // componentDidUnmount() {

  // }

  render() {
    // {
    //   if(!this.state.previouslyCached.includes(this.props.id)){
    //     this.state.previouslyCached.push(this.props.id)
    //     axios.get('/RelatedProducts', {params: {itemid: this.props.id}})
    //     .then((res) => {
    //       this.setState({RelatedProductsList: res.data})
    //     })
    //   }
    // }
    // {console.log('hello',this.state)}
    return(
    <div id="firstdiv">
      <h1>Related Products Section</h1>
      <RelatedProductsList3 RelatedProductsList={this.state.RelatedProductsList} changePage={this.props.changePage} addToCache={this.addToCache}
     cachedinfo={this.state.cachedinfo}/>
      <YourOutfitsList2 YourOutfitsList={this.state.YourOutfitsList} changePage={this.props.changePage} addToCache={this.addToCache}
     cachedinfo={this.state.cachedinfo} addToYourOutfits={this.addToYourOutfits}/>
     {/* <YourOutfitsList YourOutfitsList={this.state.YourOutfitsList} addToYourOutfits={this.addToYourOutfits}/> */}
    </div>
    // <div>hello</div>
    )
  }
}

export default RelatedProductsSect;