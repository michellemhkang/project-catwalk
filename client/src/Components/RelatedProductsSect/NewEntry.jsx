import React from 'react';
import threetest from './threetest.module.css'


class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentleft: this.props.i*350
    };
    this.clicker2 = this.clicker2.bind(this)
  }

  clicker2() {
    // console.log('a', this._reactInternalFiber.child.memoizedProps.style.left.slice(0,this._reactInternalFiber.child.memoizedProps.style.left.length -2))
    // console.log('b', Number(this._reactInternalFiber.sibling.child.memoizedProps.style.left.slice(0, this._reactInternalFiber.sibling.child.memoizedProps.style.left.length -2)))
    // console.log(this._reactInternalFiber.sibling.child.memoizedProps.style.left)
    // this._reactInternalFiber.child.memoizedProps.style.left = this._reactInternalFiber.sibling.child.memoizedProps.style.left;
  // this.setState({currentleft: this.state.currentleft - 250})
  // console.log('c',this.state.currentleft);
  this.props.changePage(this.props.entry.id)
  }

  render() {
    console.log(this.props)
    if(this.props.entry.sale !== null) {
      return(
        <li className={threetest.carouselslide} style={
          {left: `${this.state.currentleft}px`}
        }>
          <div className={threetest.entrycard} onClick={this.clicker2} href='#pagetop'>
            {/* <div className={threetest.entryimgContainer}> */}
            <div className={threetest.entrycategory}>{this.props.entry.category}</div>
              <img className={threetest.entryimg} src={this.props.entry.img}></img>
            {/* </div> */}
            <div className={threetest.entrycardinfo}>

            <div className={threetest.entryname}>{this.props.entry.name}</div>
            <div className={threetest.pricing}>
              <div className={[threetest.entryprice, threetest.onSale].join(' ')}>{`$${this.props.entry.price}`}</div>
              <div className={threetest.entrysale}>{`$${this.props.entry.sale}`}</div>
            </div>

            <div className={threetest.entryrating}>{`Rating: ${this.props.entry.rating}`}</div>
            {/* <div>{this.props.entry.id}</div> */}
            </div>
            </div>
        </li>
      )
    } else {
      return(
        <li className={threetest.carouselslide} style={
          {left: `${this.state.currentleft}px`}
        }>
          <div className={threetest.entrycard} onClick={this.clicker2} href='#pagetop'>
            {/* <div className={threetest.entryimgContainer}> */}
            <div className={threetest.entrycategory}>{this.props.entry.category}</div>
              <img className={threetest.entryimg} src={this.props.entry.img}></img>
            {/* </div> */}
            <div className={threetest.entrycardinfo}>

            <div className={threetest.entryname}>{this.props.entry.name}</div>
            <div className={threetest.pricing}>
              <div className={threetest.entryprice}>{`$${this.props.entry.price}`}</div>
              {/* <div className={threetest.entrysale}>{`$${this.props.entry.sale}`}</div> */}
            </div>

            <div className={threetest.entryrating}>{`Rating: ${this.props.entry.rating}`}</div>
            {/* <div>{this.props.entry.id}</div> */}
            </div>
            </div>
        </li>
      )
    }
  }
}

export default NewEntry;
