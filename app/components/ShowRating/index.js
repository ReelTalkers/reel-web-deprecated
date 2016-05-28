/**
*
* ShowRating
*
*/

import React from 'react'
import { getRatingTextAndColor } from 'utils/show'

import styles from './styles.css'

function ShowRating(props) {
  const [text, color] = getRatingTextAndColor(props.rating)
  return (
    <div className={styles.showRating} style={{ color }}>
      {text}
    </div>
  )
}

export default ShowRating
