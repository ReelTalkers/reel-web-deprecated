/*
 *
 * LolomoRow
 *
 */

import React from 'react'
import Relay from 'react-relay'

import { connect } from 'react-redux'

import Jawbone from 'containers/Jawbone'

import H1 from 'components/H1'
import ShowSlider from 'components/ShowSlider'

import styles from './styles.css'

class LolomoRow extends React.Component {
  render() {
    const { id, shows, name, showJawbone, selectedShow, onShowClick } = this.props
    return (
      <div className={styles.lolomoRow}>
        <H1 className={styles.rowHeader}>{name}</H1>
        <div className={styles.row}>
          <ShowSlider id={id} shows={shows.edges.map(edge => edge.node)} onShowClick={onShowClick} />
        </div>
        {showJawbone && selectedShow &&
          <Jawbone
            show={selectedShow}
          />
        }
      </div>
    )
  }
}

export default Relay.createContainer(LolomoRow, {
  fragments: {
    shows: () => Relay.QL`
      fragment on ShowConnection {
        edges {
          node {
            id
            title
            poster
          }
        }
      }
    `
    , selectedShow: () => Relay.QL`
      fragment on Show {
        ${Jawbone.getFragment('show')}
      }
    `
  }
})
