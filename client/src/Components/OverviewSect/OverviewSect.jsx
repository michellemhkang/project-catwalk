import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductOverview from './ProductInfo/ProductOverview.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import QuantitySelector from './AddToCart/QuantitySelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import DummyProductData from './DummyData/DummyProductData.js';
import DummyStyleData from './DummyData/DummyStyleData.js';
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

  render() {
    return (
      <div className={styling.rowContainer}>
        <ImageGallery productInfo={this.state.productStyles}/>
        <div className={styling.colContainer}> 
          <ProductInfo productInfo={this.state.productInfo} styleInfo={this.state.productStyles} />
          <StyleSelector productStyles={this.state.productStyles} />
          <QuantitySelector />
          <ProductOverview productInfo={this.state.productInfo}/>
        </div>
      </div>
    )
  }
}

export default OverviewSect;