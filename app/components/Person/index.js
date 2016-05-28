/**
*
* Person
*
*/

import React from 'react'
import Avatar from 'material-ui/Avatar'
import { getColor } from 'random-material-color'

import styles from './styles.css'

function Person(props) {
  return (
    <div className={styles.person}>
      {props.avatar ?
        <Avatar src={props.avatar} /> :
        <Avatar
          backgroundColor={getColor({ text: props.name })}
        >{props.name[0]}</Avatar>
      }
    </div>
  )
}

export default Person
