import React from 'react';
import styling from './Buttons.module.css';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ clicked: true });
  }

  render() {

    const { clicked } = this.state;

    return (

      <div>

        <button className={styling.favoriteButton} onClick={this.handleClick}>
          {clicked ? (
            <i className={'fas fa-star'} />
          ) : (
            <i className={'far fa-star'} />
          )}
        </button>

      </div>
    )
  }
}

// const FavoriteButton = (props) => {
//   return (
//     <button className={styling.favoriteButton}>
//       <i className={'far fa-star'} />
//     </button>
//   )
// }

export default FavoriteButton;