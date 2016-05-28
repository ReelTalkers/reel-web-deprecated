/**
*
* CastMember
*
*/

import React from 'react'
import Person from 'components/Person'

import styles from './styles.css'

function CastMember(props) {
  return (
    <div className={styles.castMember}>
      <Person avatar={props.avatar || null} name={props.name} />
      <span className={styles.name}>{props.name}</span>
      <span>{props.role && `as ${props.role}`}</span>
    </div>
  )
}

export default CastMember
