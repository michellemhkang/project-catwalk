import React from 'react';
import styles from './reviews.module.css';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  renderSizeOptions() {
    return(
      <span onChange={this.handleInputChange}>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.size === "1"}
            name="size"
            // onChange={this.handleInputChange}
          />
          A size too small
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.size === "2"}
            name="size"
            // onChange={this.handleInputChange}
          />
          1/2 a size too small
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.size === "3"}
            name="size"
            // onChange={this.handleInputChange}
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.size === "4"}
            name="size"
            // onChange={this.handleInputChange}
          />
          1/2 a size too big
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.size === "5"}
            name="size"
            // onChange={this.handleInputChange}
          />
          A size too big
        </label>
      </span>
    )
  }

  render() {
    return (
      <div className={styles.characteristics}>
        <p>Characteristics</p>
        Size:
        {this.renderSizeOptions()}
      </div>
    )
  }
}

export default Characteristics;