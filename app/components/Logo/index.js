/**
*
* Logo
*
*/

import React from 'react'

import Img from 'components/Img'
import ReelLogo from './reel-logo.png'
import styles from './styles.css'

function Logo(props) {
  return (
    <div className={styles.logo}>
      <Img className={props.className || styles.img} src={ReelLogo} alt="reel - Logo" />
    </div>
  )
}

export default Logo
