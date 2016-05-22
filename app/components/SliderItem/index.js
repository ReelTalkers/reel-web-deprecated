/**
*
* SliderItem
*
*/

import React from 'react'

import styles from './styles.css'

function SliderItem(props) {
  return (
    <div className={ styles.sliderItem }>
      {props.children}
    </div>
  )
}

export default SliderItem
