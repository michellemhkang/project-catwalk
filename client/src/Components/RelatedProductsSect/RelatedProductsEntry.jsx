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
    saleprice: null,
    prodrating: 'getting product data'
    };
    this.showCompares = this.showCompares.bind(this);
    this.pageChanger = this.pageChanger.bind(this);
  }

  showCompares() {
    console.log('do hover things')
  }

  pageChanger() {
    this.props.changePage(this.props.prod)
  }

  componentDidMount() {
    //img axios req
    axios.get('./RelatedProducts/img', {params: {itemid: this.props.prod}})
      .then(res=> {this.setState({
          defaultimg: res.data.results[0].photos[0].url,
          saleprice: res.data.results[0].sale_price
         })
         if(this.state.saleprice !== null) {
          //strike out prodprice
         }
      })
    //basic info axios req, category,name,price
    axios.get('./RelatedProducts/prods', {params: {itemid: this.props.prod}})
      .then(res => {
        this.setState({
          prodcategory: res.data.category,
          prodname: res.data.name,
          prodprice: res.data.default_price
        })
        if(this.state.saleprice !== null) {
            //strike out prodprice
        }
      }
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
    // {console.log(this.state)}
    return(
      <li className={Styles.CardEntry}>
        <div onClick={this.pageChanger}>Go to this product</div>
        <div className={Styles.prodcompare} onMouseOver={this.showCompares}>compare</div>
        <img className={Styles.prodimg} src={this.state.defaultimg}></img>
        <div className={Styles.prodcategory}>{this.state.prodcategory}</div>
        <div className={Styles.prodname}>{this.state.prodname}</div>
        <div className={Styles.prodprice}> Price {this.state.prodprice} {this.state.saleprice}</div>
        <div className={Styles.prodrating}>{this.state.prodrating}</div>
      </li>
    )
  }
}


export default RelatedProductsEntry;