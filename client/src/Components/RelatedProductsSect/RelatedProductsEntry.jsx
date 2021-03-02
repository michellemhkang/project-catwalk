import React from 'react';
import axios from 'axios';
import Styles from './RelatedProductsSect.module.css';


class RelatedProductsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    defaultimg: 'getting product data',
    prodcategory: 'getting product data',
    prodname: 'getting product data',
    prodprice: 'getting product data',
    prodrating: 'getting product data'
    };
    this.showCompares = this.showCompares.bind(this);
  }

  showCompares() {
    console.log('do hover things')
  }

  componentDidMount() {
    //img axios req
    axios.get('./RelatedProducts/img', {params: {itemid: this.props.prod}})
      .then(res=> {this.setState({defaultimg: res.data.results[0].photos[0].url})})
    //basic info axios req, category,name,price
    axios.get('./RelatedProducts/prods', {params: {itemid: this.props.prod}})
      .then(res => this.setState({
        prodcategory: res.data.category,
        prodname: res.data.name,
        prodprice: res.data.default_price
      })
      )
    //ratings axios request
    axios.get('./RelatedProducts/ratings', {params: {itemid: this.props.prod}})
      .then(res => {
        let ratinglist = res.data.results.length;
        if(ratinglist === 0) {
        } else {

          let rating = 0
          for(let i = 0; i < ratinglist; i++) {
            rating += res.data.results[i].rating
          }
          rating = rating/ratinglist
          this.setState({prodrating: rating});
        }
      })
  }

  //some cover thumbnail: {this.state.defaultimg}

  render() {
    return(
      <li className={Styles.CardEntry}>
        <div className={Styles.prodcompare} onMouseOver={this.showCompares}>compare</div>
        <img className={Styles.prodimg} src={this.state.defaultimg}></img>
        <div className={Styles.prodcategory}>{this.state.prodcategory}</div>
        <div className={Styles.prodname}>{this.state.prodname}</div>
        <div className={Styles.prodprice}>{this.state.prodprice}</div>
        <div className={Styles.prodrating}>{this.state.prodrating}</div>
      </li>
    )
  }
}


export default RelatedProductsEntry;