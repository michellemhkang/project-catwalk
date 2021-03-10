import React from 'react';
import RelatedProductsSection from './RelatedProductsSection.module.css';


class YourOutfitAddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    // console.log('do the thing');
    this.props.addToYourOutfits(this.props.id);
  }

  render() {
    return(
      <li className={RelatedProductsSection.carouselslide} onClick={this.clickHandler}>
        <div className={RelatedProductsSection.entrycard}>
          <div className={RelatedProductsSection.addcardtop}>Add to List</div>
          <i className={["fas fa-plus fa-3x", RelatedProductsSection.addicon].join(' ')}></i>
          </div>
      </li>
    )
  }
}

export default YourOutfitAddCard;