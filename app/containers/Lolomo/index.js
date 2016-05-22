/*
 *
 * Lolomo
 *
 */

import React from 'react'
import Relay from 'react-relay'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
  selectJawbone
} from './selectors'

import {
  toggleJawbone
} from './actions'

import LolomoRow from 'containers/LolomoRow'

import styles from './styles.css'

class Lolomo extends React.Component {

  handleShowClick = (evt, showId, rowId) => {
    this.props.relay.setVariables({ selectedShowId: showId, hasSelectedShow: true }, () => {
      this.props.onToggleJawbone(evt, showId, rowId)
    })
  }

  render() {
    const { viewer: {topPicks, comedy, romance, selectedShow}, onToggleJawbone, jawbone } = this.props
    return (
      <div className={styles.lolomo}>
        <LolomoRow
          id="0"
          shows={topPicks}
          name="Top Picks"
          onShowClick={this.handleShowClick}
          showJawbone={jawbone.rowId === '0'}
          selectedShow={selectedShow}
        />
        <LolomoRow
          id="1"
          shows={comedy}
          name="Comedy"
          onShowClick={this.handleShowClick}
          showJawbone={jawbone.rowId === '1'}
          selectedShow={selectedShow}
        />
        <LolomoRow
          id="2"
          shows={romance}
          name="Romance"
          onShowClick={this.handleShowClick}
          showJawbone={jawbone.rowId === '2'}
          selectedShow={selectedShow}
        />
      </div>
    )
  }
}

const LolomoContainer = Relay.createContainer(Lolomo, {
  initialVariables: {
    selectedShowId: null
    , hasSelectedShow: false
  }
  , fragments: {
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

        selectedShow: show(id: $selectedShowId) @include(if: $hasSelectedShow) {
          ${LolomoRow.getFragment('selectedShow')}
        }
    }
    `
  }
})

function mapDispatchToProps(dispatch) {
  return {
    onToggleJawbone: (evt, showId, rowId) => dispatch(toggleJawbone(showId, rowId)),
    dispatch,
  }
}

export default connect(createSelector(
  selectJawbone(),
  (jawbone) => ({ jawbone })
), mapDispatchToProps)(LolomoContainer)
