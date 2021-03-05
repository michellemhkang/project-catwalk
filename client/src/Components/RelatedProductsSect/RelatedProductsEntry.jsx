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
    prodrating: 'getting product data',
    completedreq: 0
    };
    this.showCompares = this.showCompares.bind(this);
    this.pageChanger = this.pageChanger.bind(this);
    this.test = this.test.bind(this)
  }

  test(e) {
    console.log('ahh')
  }

  showCompares(e) {
    e.stopPropagation()
    console.log('show comparasion modal')
  }

  pageChanger(e) {
    e.stopPropagation()
    this.props.changePage(this.props.prod)
  }

  componentDidMount() {
    // console.log('this cache',this.props.cachedinfo)
    let cacheproduct = this.props.cachedinfo.filter(product => product.id === this.props.prod)
    // console.log('cacheproduct', cacheproduct)
    if(cacheproduct.length > 0) {
      this.setState({
        defaultimg: cacheproduct[0].defaultimg,
        prodcategory: cacheproduct[0].prodcategory,
        prodname: cacheproduct[0].prodname,
        prodprice: cacheproduct[0].prodprice,
        saleprice: cacheproduct[0].saleprice,
        prodrating: cacheproduct[0].prodrating,
      })
      console.log('insta load!!!')
    } else {
      //img axios req
      axios.get('./RelatedProducts/img', {params: {itemid: this.props.prod}})
        .then(res=> {this.setState({
            defaultimg: res.data.results[0].photos[0].url,
            saleprice: res.data.results[0].sale_price
           })
           this.state.completedreq += 1;
           if(this.state.completedreq === 3){
            this.state.id = this.props.prod;
            this.props.addToCache(this.state)
           }
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
            this.state.completedreq += 1;
            if(this.state.completedreq === 3){
             this.state.id = this.props.prod;
             this.props.addToCache(this.state)
            }
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
              this.setState({prodrating: 'no rating'})
            } else {

              let rating = 0
              for(let i = 0; i < ratinglist; i++) {
                rating += res.data.results[i].rating
              }
              rating = Math.round(rating/ratinglist * 10) / 10
              this.setState({prodrating: rating});
            }
            this.state.completedreq += 1;
            if(this.state.completedreq === 3){
              this.state.id = this.props.prod;
             this.props.addToCache(this.state)
            }
          })
    }


  }

  //some cover thumbnail: {this.state.defaultimg}

  render() {
    // {console.log('entry props', this.props)}
    // {console.log(this.state)}
    return(
      <li className={Styles.CardEntry} onClick={this.pageChanger}>
        {/* <div className={Styles.Go}onClick={this.pageChanger}>Go</div> */}
        <div className={Styles.prodcompare} onClick={this.showCompares}>compare</div>
        <div className={Styles.prodimgdiv}>
          <img className={Styles.prodimg} src={this.state.defaultimg}></img>
        </div>
        <div className={Styles.infobox}>
          <div className={Styles.prodcategory}>{this.state.prodcategory}</div>
          <div className={Styles.prodname}>{this.state.prodname}</div>
          <div className={Styles.prodprice}> Price {this.state.prodprice} {this.state.saleprice}</div>
          <div className={Styles.prodrating}>{this.state.prodrating}</div>

        </div>
      </li>
    )
  }
}


export default RelatedProductsEntry;
