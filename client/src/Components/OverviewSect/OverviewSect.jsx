import React from 'react';
import axios from 'axios';
import styling from './Overview.module.css';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductOverview from './ProductInfo/ProductOverview.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      productInfo: {},
      productStyles: [],
      selectedStyleInfo: {},
      getRequests: 0
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.setSelectedStyle = this.setSelectedStyle.bind(this);
  }

  getProduct(id) {
    axios.get('/overview/products/:', {
      params: { product_id: id }
    })
      .then((response) => {
        // response.data should be an object
        this.props.getProductInfo(response.data);
        this.setState({
          getRequests: this.state.getRequests + 1,
          productInfo: Object.assign(this.state.productInfo, response.data)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getStyles(id) {
    axios.get('/overview/styles', {
      params: {product_id: id}
    })
    .then((response) => {
      // response.data.results should be an array
      this.setState({
        getRequests: this.state.getRequests + 1,
        productStyles: response.data.results,
        // when get styles but no style is selected by the user's click,
        // the selected style should be the first one
        selectedStyleInfo: response.data.results[0]
      });
      this.props.getStyleInfo(this.state.selectedStyleInfo);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  setSelectedStyle(id) {
    if (this.state.productStyles.length !== 0) {
      this.state.productStyles.filter((style) => {
        if (style['default?'] || style.style_id === id) {
          this.setState({selectedStyleInfo: style})
        }
      })
    }
  }

  componentDidMount() {
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

    const { currentId, productInfo, productStyles, selectedStyleInfo } = this.state;

    if (this.state.getRequests < 2) {
      return (
        <div>Loading</div>
      )
    }

    return (
      <div className={styling.overviewContainer}>

        <div className={styling.rowContainer}>

          <ImageGallery name={selectedStyleInfo.name} photos={selectedStyleInfo.photos} />

          <div className={styling.colContainer}>
            <ProductInfo name={productInfo.name} category={productInfo.category} defaultPrice={productInfo.default_price} salePrice={selectedStyleInfo.sale_price} />
            <StyleSelector styles={productStyles} setSelectedStyle={this.setSelectedStyle} />
            <AddToCart skus={selectedStyleInfo.skus} />
          </div>

        </div>

        <div>
          <ProductOverview slogan={productInfo.slogan} description={productInfo.description} features={productInfo.features} />
        </div>

      </div>
    )
  }
}

export default OverviewSect;