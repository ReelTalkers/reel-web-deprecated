/**
*
* CastPreview
*
*/

import React from 'react'

import OverflowAvatar from 'components/OverflowAvatar'
import Person from 'components/Person'

import styles from './styles.css'

function CastPreview(props) {
  return (
    <div className={styles.castPreview}>
      {props.cast.slice(0, 2).map(person => (
        <div className={styles.pad}>
          <Person name={person.fullName} avatar={person.avatar || null} />
        </div>
      ))}
      {props.cast.length > 2 && (
        <div className={styles.pad}>
          <OverflowAvatar number={props.cast.length - 2} />
        </div>
      )}
    </div>
  )
}

export default CastPreview
