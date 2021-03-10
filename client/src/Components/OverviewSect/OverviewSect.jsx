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
      currentId: 14034,
      productInfo: {},
      productStyles: [],
      selectedStyleInfo: {},
      getRequests: 0
      // selectedStyleId: null
      // stylePhotos: [],
      // productName: '',
      // productCategory: '',
      // productFeatures: [],
      // productDefaultPrice: null
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
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
        getRequests: this.state.getRequests + 1,
        productInfo: Object.assign(this.state.productInfo, response.data)
        // productName: response.data.name,
        // productCategory: response.data.category,
        // productFeatures: response.data.features,
        // productDefaultPrice: response.data.default_price
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
      this.setState({
        getRequests: this.state.getRequests + 1,
        productStyles: response.data.results,
        // when get styles but no style is selected by the user's click,
        // the selected style should be the first one 
        selectedStyleInfo: response.data.results[0]
      });
      // console.log('state changed productStyles', this.state.productStyles);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // could put filter fn in render, but would need a way to invoke fn that will pass selected style 
  // info object back up to App
  setSelectedStyle(id) {
    // this.setState({
    //   selectedStyleId: id
    // })
    // let selectedStyle;
    if (this.state.productStyles.length !== 0) {
      // console.log(this.state.productStyles);
      this.state.productStyles.filter((style) => {
        // sets the first 'selected' image to be where default property is present 
        if (style['default?'] || style.style_id === id) {
          this.setState({
            selectedStyleInfo: style
          })
        }
      })
    }
    this.props.getStyleInfo(this.state.selectedStyleInfo);
    console.log(this.state.selectedStyleInfo);
  }

  componentDidMount() {
    console.log('component mounted');
    this.getProduct(this.state.currentId);
    this.getStyles(this.state.currentId);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id) {
  //     this.getProduct(this.props.id);
  //     this.getStyles(this.props.id);
  //   }
  // }

  render() {
    console.log('rendered');
    // console.log(this.state);
    // console.log(this.state.currentId);
    // this.getStyles(this.props.id);

    const { currentId, productInfo, productStyles, selectedStyleInfo } = this.state;

    // so renders only when there is info and we don't keep getting undefined
    // if (Object.keys(productInfo).length === 0 || productStyles.length === 0) {
    //   this.getProduct(14034);
    //   this.getStyles(currentId);
    //   console.log('hello');
    //   console.log(productStyles);
    // }

    // looking for a way to pass in only photos and names of the product's styles

    // let onlyPhotos = [];
    // for (let i = 0; i < this.state.productStyles.length; i++) {
    //   let photoUrl = this.state.productStyles[i].photos[0].url
    //   onlyPhotos.push(photoUrl);
    // }

    // const images = this.state.productStyles.map((style, index) => {
    //   return <ImageGallery name={style.name} photos={style.photos} />
    // })

    // filter here for the selected style object, 
    // and pass only the necessary properties to each child comp
    // let selectedStyle;
    // if (this.state.productStyles.length !== 0) {
    //   this.state.productStyles.filter((style) => {
    //     // sets the first 'selected' image to be where default property is present 
    //     if (style['default?']) {
    //       selectedStyle = style;
    //     } else if (style.style_id === this.state.selectedStyleId) {
    //       selectedStyle = style;
    //     }
    //   })
    // }
    // console.log(selectedStyle.photos);

    // refactor so price goes to product info not style selector
    // defaultPrice={this.state.productDefaultPrice} 

    // DEBUGGING 101
    // 1. Come up with a theory of what's wrong
    // 2. Collect more evidence?
    // 3. Come up with a fix for that theory (fix one thing at a time)
    // 4. Test fix
    // 5. If fixed, verify logic behind the fix
    // 6. Else - go to step 1

    if (this.state.getRequests < 2) {
      return (
        <div>Loading</div>
      )
    } 
    return (
      <div className={styling.rowContainer}>
        {/* <ImageGallery photoUrls={onlyPhotos} />
        {images} */}
        <ImageGallery name={selectedStyleInfo.name} photos={selectedStyleInfo.photos} /> 
        <div className={styling.colContainer}>
          <ProductInfo name={productInfo.name} category={productInfo.category} defaultPrice={productInfo.default_price} salePrice={selectedStyleInfo.sale_price} /> 
          <StyleSelector styles={productStyles} setSelectedStyle={this.setSelectedStyle} />
          <SizeSelector skus={selectedStyleInfo.skus} />
          <QuantitySelector />
          <AddToCart />
          <ProductOverview slogan={productInfo.slogan} description={productInfo.description} features={productInfo.features} /> 
        </div> 
      </div>
    )
  }
}

export default OverviewSect;