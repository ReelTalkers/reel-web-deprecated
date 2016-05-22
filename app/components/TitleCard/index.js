/**
*
* TitleCard
*
*/

import React from 'react'

import Img from 'components/Img'
import styles from './styles.css'

function TitleCard(props) {
  return (
    <div
      className={styles.titleCard}
      onClick={props.onClick}
    >
      <Img className={styles.poster} src={props.poster} alt={props.title} />
    </div>
  )
}

export default TitleCard
