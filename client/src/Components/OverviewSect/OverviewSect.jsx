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
// import authorizationKey from '../../../../config.js';

class OverviewSect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.id,
      // productInfo: {},
      // productData: []
      productInfo: DummyProductData,
      productStyles: DummyStyleData.results
    };
  }

  // componentDidMount() {
  //   this.getProductInfo();
  // }

  // getProductInfo() {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931', {
  //     headers:
  //     {Authorization: `${authorizationKey.key}`}
  //   }).then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

    // var config = {
    //   method: 'get',
    //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/14931',
    //   headers: { 
    //     'Authorization': authorizationKey.key
    //   }
    // };
    
    // axios(config)
    // .then(function (response) {
    //   // console.log(JSON.stringify(response.data));
    //   console.log(response.data);
    //   this.setState({
    //     productInfo: response.data
    //   })
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  // }

  render() {
    return (
      <div className={styling.rowContainer}>
        <ImageGallery productInfo={this.state.productStyles}/>
        <div className={styling.colContainer}> 
          <ProductInfo productInfo={this.state.productInfo} styleInfo={this.state.productStyles} />
          <StyleSelector productStyles={this.state.productStyles} />
          <SizeSelector />
          <QuantitySelector />
          <AddToCart />
          <ProductOverview productInfo={this.state.productInfo}/>
        </div>
      </div>
    )
  }
}

export default OverviewSect;