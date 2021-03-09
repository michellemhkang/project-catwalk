import React from 'react';
import threetest from './threetest.module.css';


class YourOutfitAddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    console.log('do the thing');
    this.props.addToYourOutfits();
  }

  render() {
    return(
      <li className={threetest.carouselslide} onClick={this.clickHandler}>
        <div className={threetest.entrycard}>
          <div className={threetest.entrycategory}>Add to List</div>
          <i class={["fas fa-plus fa-3x", threetest.addicon].join(' ')}></i>
          </div>
      </li>
    )
  }
}

export default YourOutfitAddCard;