/**
*
* Tabs
*
*/

import React from 'react'
import { Tabs, Tab as MaterialTab } from 'material-ui/Tabs'

import styles from './styles.css'

function ReelTabs(props) {
  const { children, ...attributes } = props
  return (
    <Tabs className={styles.tabs} {...attributes}>
      {children}
    </Tabs>
    )
}

module.exports = { Tabs: ReelTabs, Tab: MaterialTab }
