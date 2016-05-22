/*
 *
 * Lolomo
 *
 */

import React from 'react'
import Relay from 'react-relay'
import { connect } from 'react-redux'

import {
  selectLolomo,
} from './selectors'

import LolomoRow from 'containers/LolomoRow'

import styles from './styles.css'

class Lolomo extends React.Component {

  render() {
    const { viewer: {topPicks, comedy, romance} } = this.props
    return (
      <div className={styles.lolomo}>
        <LolomoRow shows={topPicks} name="Top Picks" />
        <LolomoRow shows={comedy} name="Comedy" />
        <LolomoRow shows={romance} name="Romance" />
      </div>
    )
  }
}

export default Relay.createContainer(Lolomo, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        topPicks: recommendShows(first: 10) {
            ${LolomoRow.getFragment('shows')}
        }

        comedy: allShows(first: 10, genre__contains:"Comedy") {
            ${LolomoRow.getFragment('shows')}
        }

        romance: allShows(first: 10, genre__contains:"Romance") {
            ${LolomoRow.getFragment('shows')}
        }
      }
    `
  }
})
