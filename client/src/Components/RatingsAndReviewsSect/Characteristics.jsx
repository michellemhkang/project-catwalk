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
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Size:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.size === "1"}
            name="size"
          />
          A size too small
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.size === "2"}
            name="size"
          />
          1/2 a size too small
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.size === "3"}
            name="size"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.size === "4"}
            name="size"
          />
          1/2 a size too big
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.size === "5"}
            name="size"
          />
          A size too big
        </label>
      </span>
    )
  }

  renderWidthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Width:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.width === "1"}
            name="width"
          />
          Too Narrow
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.width === "2"}
            name="width"
          />
          Slightly Narrow
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.width === "3"}
            name="width"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.width === "4"}
            name="width"
          />
          Slightly wide
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.width === "5"}
            name="width"
          />
          Too wide
        </label>
      </span>
    )
  }

  renderComfortOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Comfort:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.comfort === "1"}
            name="comfort"
          />
          Uncomfortable
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.comfort === "2"}
            name="comfort"
          />
          Slightly uncomfortable
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.comfort === "3"}
            name="comfort"
          />
          Ok
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.comfort === "4"}
            name="comfort"
          />
          Comfortable
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.comfort === "5"}
            name="comfort"
          />
          Perfect
        </label>
      </span>
    )
  }

  renderQualityOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Quality:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.quality === "1"}
            name="quality"
          />
          Poor
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.quality === "2"}
            name="quality"
          />
          Below Average
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.quality === "3"}
            name="quality"
          />
          What I expected
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.quality === "4"}
            name="quality"
          />
          Pretty great
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.quality === "5"}
            name="quality"
          />
          Perfect
        </label>
      </span>
    )
  }

  renderLengthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Length:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.length === "1"}
            name="length"
          />
          Runs short
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.length === "2"}
            name="length"
          />
          Runs slightly short
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.length === "3"}
            name="length"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.length === "4"}
            name="length"
          />
          Runs slightly long
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.length === "5"}
            name="length"
          />
          Runs long
        </label>
      </span>
    )
  }

  renderFitOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Fit:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.fit === "1"}
            name="fit"
          />
          Runs tight
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.fit === "2"}
            name="fit"
          />
          Runs slightly tight
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.fit === "3"}
            name="fit"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.fit === "4"}
            name="fit"
          />
          Runs slightly long
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.fit === "5"}
            name="fit"
          />
          Runs long
        </label>
      </span>
    )
  }

  render() {
    return (
      <div className={styles.radioGroup}>
        <p>Characteristics</p>
        {this.props.characteristics.Size ? this.renderSizeOptions() : null}
        {this.props.characteristics.Width ? this.renderWidthOptions() : null}
        {this.props.characteristics.Comfort ? this.renderComfortOptions() : null}
        {this.props.characteristics.Quality ? this.renderQualityOptions() : null}
        {this.props.characteristics.Length ? this.renderLengthOptions() : null}
        {this.props.characteristics.Fit ? this.renderFitOptions() : null}
      </div>
    )
  }
}

export default Characteristics;