import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import DummyProductData from './DummyData/DummyProductData.js';
import DummyStyleData from './DummyData/DummyStyleData.js';
import ProductOverview from './ProductInfo/ProductOverview.jsx';
import styling from './Overview.module.css';

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      // productInfo: {},
      // productStyles: [],
      productInfo: DummyProductData,
      productStyles: DummyStyleData.results
    };
  }

  // componentDidMount() {
  //   this.setState({

  //   })
  // }

  render() {
    return (
      <div>
      {/* // <div className={styling.colContainer}>
      //   <div className={styling.colContainer} />
      //   <div className={styling.rowContainer} /> */}
        <ProductInfo productInfo={this.state.productInfo} styleInfo={this.state.productStyles} />
        <StyleSelector productStyles={this.state.productStyles} />
        <AddToCart />
        <ImageGallery productInfo={this.state.productStyles}/>
        <ProductOverview productInfo={this.state.productInfo}/>
      </div>
    )
  }
}

export default OverviewSect;