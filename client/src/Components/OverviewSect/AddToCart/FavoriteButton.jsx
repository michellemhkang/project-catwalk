import React from 'react';
import styling from './Buttons.module.css';

const FavoriteButton = (props) => {
  return (
    <button className={styling.favoriteButton}>
      <i className={'far fa-star'} />
    </button>
  )
}

export default FavoriteButton;