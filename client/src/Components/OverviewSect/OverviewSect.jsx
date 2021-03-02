import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import DummyData from './DummyData/DummyData.js';

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      productInfo: DummyData
    };
  }

  render() {
    return (
      <div>
        <ProductInfo productInfo={this.state.productInfo} />
        <StyleSelector />
        <AddToCart />
        <ImageGallery />
      </div>
    )
  }
}

export default OverviewSect;