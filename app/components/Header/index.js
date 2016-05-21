/**
*
* Header
*
*/

import React from 'react'

import styles from './styles.css'

function Header(props) {
  return (
    <div className={ styles.header }>
      {props.children}
    </div>
  )
}

export default Header
