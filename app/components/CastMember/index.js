/**
*
* CastMember
*
*/

import React from 'react'
import Avatar from 'material-ui/Avatar'

import styles from './styles.css'

function CastMember(props) {
  return (
    <div className={styles.castMember}>
      {props.avatar ?
        <Avatar src={props.avatar} /> :
        <Avatar>{props.name[0]}</Avatar>
      }
      <span className={styles.name}>{props.name}</span>
      <span>{props.role && `as ${props.role}`}</span>
    </div>
  )
}

export default CastMember
