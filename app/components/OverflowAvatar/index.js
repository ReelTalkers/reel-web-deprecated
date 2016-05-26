/**
*
* OverflowAvatar
*
*/

import React from 'react'
import Avatar from 'material-ui/Avatar'
import styles from './styles.css'

function OverflowAvatar(props) {
  return (
    <div className={styles.overflowAvatar}>
      <Avatar>{`+${props.number}`}</Avatar>
    </div>
  )
}

export default OverflowAvatar
