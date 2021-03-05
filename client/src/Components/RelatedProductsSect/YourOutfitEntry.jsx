import React from 'react';
import Styles from './RelatedProductsSect.module.css';


class YourOutfitEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <li className={Styles.CardEntry}>
         <div>{this.props.outfitEntry.id}</div>
         <div>{this.props.outfitEntry.avgRating}</div>
      </li>
    )
  }
}

export default YourOutfitEntry;