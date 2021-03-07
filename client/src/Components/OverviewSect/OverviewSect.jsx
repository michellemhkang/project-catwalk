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

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      productInfo: {},
      productStyles: [],
      productName: '',
      productCategory: '',
      productFeatures: [],
      productDefaultPrice: null
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  getProduct(id) {
    axios.get('/overview/products/:', {
      params: {product_id: id}
    })
    .then((response) => {
      // console.log('getting product');
      this.props.getProductInfo(response.data);
      // response.data should be an object
      this.setState({
        productInfo: Object.assign(this.state.productInfo, response.data),
        productName: response.data.name,
        productCategory: response.data.category,
        productFeatures: response.data.features,
        productDefaultPrice: response.data.default_price
      })
      // console.log(this.state.productInfo);
    })
    .catch((error) => {
      // console.log('Here is an error');
      console.log(error);
    })
  }

  getStyles(id) {
    axios.get('/overview/styles', {
      params: {product_id: id}
    })
    .then((response) => {
      // console.log('getting styles');
      // console.log(response.data.results);
      // response.data.results should be an array
      // console.log('default state productStyles', this.state.productStyles);
      this.setState({productStyles: response.data.results});
      // console.log('state changed productStyles', this.state.productStyles);
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

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getProduct(this.props.id);
      this.getStyles(this.props.id);
    }
  }

  render() {
    console.log('rendered');
    // console.log(this.state.currentId);
    // this.getStyles(this.props.id);

    // if (this.state.productName === '' || this.state.productCategory === '') {
    //   this.getProduct(this.props.id);
    //   this.getStyles(this.props.id);
    // }
    
    return (
      <div className={styling.rowContainer}>
        <ImageGallery styleInfo={this.state.productStyles}/>
        <div className={styling.colContainer}> 
          <ProductInfo name={this.state.productName} category={this.state.productCategory} />
          <StyleSelector defaultPrice={this.state.productDefaultPrice} styles={this.state.productStyles} getSelectedStyle={this.props.getStyleInfo} />
          <SizeSelector />
          <QuantitySelector />
          <AddToCart />
          <ProductOverview productInfo={this.state.productInfo} features={this.state.productFeatures} />
        </div>
      </div>
    )
  }
}

export default OverviewSect;