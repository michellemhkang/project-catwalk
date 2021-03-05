import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductOverview from './ProductInfo/ProductOverview.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import SizeSelector from './AddToCart/SizeSelector.jsx';
import QuantitySelector from './AddToCart/QuantitySelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import DummyProductData from './DummyData/DummyProductData.js';
import DummyStyleData from './DummyData/DummyStyleData.js';
import styling from './Overview.module.css';
import axios from 'axios';
// import authKey from '../../../../config.js';

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      productInfo: {},
      productStyles: []
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  getProduct(id) {
    axios.get('/overview/products', {
      params: {id: id}
    })
    .then((response) => {
      console.log('getting product');
      this.props.getProductInfo(response.data);
      // response.data should be an object
      this.setState({productInfo: response.data})
    })
    .catch((error) => {
      console.log('Here is an error');
      // console.log(error);
    })
  }

  getStyles(id) {
    axios.get('/overview/styles', {
      params: {id: id}
    })
    .then((response) => {
      console.log('getting styles')
      this.setState({productStyles: response.data.results})
      // response.data should be an array
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    console.log('component mounted');
    this.getProduct(this.state.currentId);
    this.getStyles(this.state.currentId);
  }

  render() {
    return (
      <div className={styling.rowContainer}>
        <ImageGallery productInfo={this.state.productStyles}/>
        <div className={styling.colContainer}> 
          <ProductInfo productInfo={this.state.productInfo} styleInfo={this.state.productStyles} />
          <StyleSelector styles={this.state.productStyles} getSelectedStyle={this.props.getStyleInfo} />
          <SizeSelector />
          <QuantitySelector />
          <AddToCart />
          <ProductOverview productInfo={this.state.productInfo} />
        </div>
      </div>
    )
  }
}

export default OverviewSect;