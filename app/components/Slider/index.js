/**
*
* Slider
*
*/

import React from 'react'

import styles from './styles.css'

function Slider(props) {
  return (
    <div className={styles.slider}>
      {props.children}
    </div>
  )
}

export default Slider
