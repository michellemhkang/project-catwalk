import React from 'react';
import styles from './reviews.module.css';

let CharacteristicGraph = ({key, name, value}) => {
  return (
    <div class="gl-comparison-bar gl-comparison-bar--triangle">
      <div class="gl-comparison-bar__title">Size</div>
      <div class="gl-comparison-bar__bg">
        <div class="gl-comparison-bar__indicator" style="transform: translateX(-68.5714%); left: 68.5714%;">
        </div>
      </div>
      <div class="gl-comparison-bar__labels">
        <label class="gl-comparison-bar__label">Too small</label>
        <label class="gl-comparison-bar__label">Perfect</label>
        <label class="gl-comparison-bar__label">Too large</label>
      </div>
    </div>
  )
}


export default CharacteristicGraph