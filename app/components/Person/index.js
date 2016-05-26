/**
*
* Person
*
*/

import React from 'react'
import Avatar from 'material-ui/Avatar'
import styles from './styles.css'

function Person(props) {
  return (
    <div className={styles.person}>
      {props.avatar ?
        <Avatar src={props.avatar} /> :
        <Avatar>{props.name[0]}</Avatar>
      }
    </div>
  )
}

export default Person
