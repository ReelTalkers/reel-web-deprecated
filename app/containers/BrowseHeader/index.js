/**
*
* BrowseHeader
*
*/

import React from 'react'
import Relay from 'react-relay'

import UniversalSearch from 'containers/UniversalSearch'
import Header from 'components/Header'
import Logo from 'components/Logo'

import styles from './styles.css'

function BrowseHeader(props) {
  return (
    <div className={styles.browseHeader}>
      <Header>
        <Logo className={styles.logo} />
        <UniversalSearch viewer={props.viewer} />
        <div>gziegan</div>
      </Header>
    </div>
  )
}

export default Relay.createContainer(BrowseHeader, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        ${UniversalSearch.getFragment('viewer')}
      }
    `
  }
})
