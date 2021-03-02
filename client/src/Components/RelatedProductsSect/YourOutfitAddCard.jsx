import React from 'react';
import Styles from './RelatedProductsSect.module.css';


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
      <li className={Styles.CardEntry} onClick={this.clickHandler}>
        <div>Add to list</div>
      </li>
    )
  }
}

export default YourOutfitAddCard;