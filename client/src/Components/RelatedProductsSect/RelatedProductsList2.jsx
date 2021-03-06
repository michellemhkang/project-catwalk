import React from 'react';
import testStyles from './testStyles.module.css';
import axios from 'axios';

class RelatedProductsList2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: [],
      done: 0
    };
  }

  componentDidUpdate() {
    this.state.done++;
    if(this.state.done < 3) {
      var photoArr = [];
      this.props.RelatedProductsList.forEach((item) => {
        axios.get('/RelatedProducts/img', {params : {itemid: item}})
        .then((res) => {
          console.log(res.data)
          // for (let i = 0; i < res.data.results.length; i++) {
            photoArr.push(res.data.results[0].photos[0].url)
          // }
          if(photoArr.length === 3 ) {
            this.setState({img: photoArr})
          }
        })
      })

    }
  }




  render() {
    console.log(this.state)
    return(
      <div className={testStyles.listheader}>
        <div >carouselTester should be list</div>
          <button className={testStyles.leftbutton}>Left</button>
        <div className={testStyles.testcara}>
          <ul className={testStyles.testcaraul}>
            <li className={testStyles.imgent}>
              <img className={testStyles.testimg} src={this.state.img[0]}></img>
            </li>
            <li className={testStyles.imgent}>
              <img className={testStyles.testimg} src={this.state.img[1]}></img>
            </li>
            <li className={testStyles.imgent}>
              <img className={testStyles.testimg} src={this.state.img[2]}></img>
            </li>


          </ul>
        </div>
        <button className={testStyles.rightbutton}>right</button>

      </div>
    )
  }
}


export default RelatedProductsList2;
