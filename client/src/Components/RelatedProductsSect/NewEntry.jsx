import React from 'react';
import RelatedProductsSection from './RelatedProductsSection.module.css'


class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentleft: this.props.i*350
    };
    this.goto = this.goto.bind(this);
    this.actionhandler = this.actionhandler.bind(this);
  }

  actionhandler(e){
    e.stopPropagation()
    if(this.props.cardType === 'Outfits') {
      this.props.removeFromYourOutfits(this.props.entry.id)
    }
    if(this.props.cardType === 'Compare') {
      console.log('Show Comparsion Modal')
    }
  }


  goto(e) {
    e.stopPropagation()
  this.props.changePage(this.props.entry.id)
}

render() {
  if(this.props.cardType === 'Outfits') {
    var actionbuttonicon = "fas fa-times-circle"
  }
  if(this.props.cardType === 'Compare') {
    var actionbuttonicon = "fas fa-star"
  }

  if(this.props.entry.img === null) {
    this.props.entry.img = 'https://www.acquia.com/sites/default/files/styles/legacy_inline_image/public/media/image/2021-01/404-Eevee-Cat.png?itok=H-2S3l4x'
  }


  if(this.props.entry.sale !== null) {
      return(
        <li className={RelatedProductsSection.carouselslide} style={
          {left: `${this.state.currentleft}px`}
        }>
          <div className={RelatedProductsSection.entrycard} onClick={this.goto} href='#pagetop'>
            <div className={RelatedProductsSection.cardtop}>
              <div className={RelatedProductsSection.entrycategory}>{this.props.entry.category}</div>
              <i className={[actionbuttonicon, RelatedProductsSection.actionbutton].join(' ')} onClick={this.actionhandler}></i>
            </div>
              <img className={RelatedProductsSection.entryimg} src={this.props.entry.img}></img>
            <div className={RelatedProductsSection.entrycardinfo}>
            <div className={RelatedProductsSection.entryname}>{this.props.entry.name}</div>
            <div className={RelatedProductsSection.pricing}>
              <div className={[RelatedProductsSection.entryprice, RelatedProductsSection.onSale].join(' ')}>{`$${this.props.entry.price}`}</div>
              <div className={RelatedProductsSection.entrysale}>{`$${this.props.entry.sale}`}</div>
            </div>
            <div className={RelatedProductsSection.entryrating}>{`Rating: ${this.props.entry.rating}`}</div>
            </div>
            </div>
        </li>
      )
    } else {
      return(
        <li className={RelatedProductsSection.carouselslide} style={
          {left: `${this.state.currentleft}px`}
        }>
          <div className={RelatedProductsSection.entrycard} onClick={this.goto} href='#pagetop'>
            <div className={RelatedProductsSection.cardtop}>
              <div className={RelatedProductsSection.entrycategory}>{this.props.entry.category}</div>
              <i className={[actionbuttonicon, RelatedProductsSection.actionbutton].join(' ')} onClick={this.actionhandler}></i>
            </div>
              <img className={RelatedProductsSection.entryimg} src={this.props.entry.img}></img>
            <div className={RelatedProductsSection.entrycardinfo}>
            <div className={RelatedProductsSection.entryname}>{this.props.entry.name}</div>
            <div className={RelatedProductsSection.pricing}>
              <div className={RelatedProductsSection.entryprice}>{`$${this.props.entry.price}`}</div>
            </div>
            <div className={RelatedProductsSection.entryrating}>{`Rating: ${this.props.entry.rating}`}</div>
            </div>
            </div>
        </li>
      )
    }
  }
}

export default NewEntry;

