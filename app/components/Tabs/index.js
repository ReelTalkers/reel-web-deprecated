/**
*
* Tabs
*
*/

import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

import styles from './styles.css'

function ReelTabs(props) {
  return (
    <Tabs {...props}>
      {props.children}
    </Tabs>
    )
}

function ReelTab(props) {
  return (
    <Tab {...props} />
  )
}

export default { Tabs: ReelTabs, Tab: ReelTab }
