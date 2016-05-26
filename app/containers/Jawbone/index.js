/*
 *
 * Jawbone
 *
 */

import React from 'react'
import Relay from 'react-relay'
import GridList from 'material-ui/GridList'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectTab } from './selectors'
import { changeSelectedTab } from './actions'

import Img from 'components/Img'
import H1 from 'components/H1'
import CastMember from 'components/CastMember'
import CastPreview from 'components/CastPreview'
import ShowOverview from 'components/ShowOverview'

import styles from './styles.css'

class Jawbone extends React.Component {
  renderCastMember(person) {
    return (
      <CastMember avatar={person.avatar || null} name={person.fullName} role={person.role || null} />
    )
  }

  render() {
    const { show, selectedTabIndex, onChangeTab } = this.props
    return (
      <div className={styles.jawbone}>
        <Img className={styles.poster} src={show.poster} alt={show.title} />
        <div className={styles.infoPanel}>
          <div className={styles.titleBar}>
            <H1 className={styles.title}>{show.title}</H1>
            <H1 className={styles.closeButton}>X</H1>
          </div>
          <div className={styles.header}>
            <Tabs
              value={selectedTabIndex}
              onChange={onChangeTab}
              className={styles.tabs}
            >
              <Tab label="Overview" value={0} />
              <Tab label="Similar" value={1} />
              <Tab label="Cast" value={2} />
            </Tabs>
            <CastPreview cast={show.cast.edges.map(edge => edge.node)} />
          </div>
          <SwipeableViews
            index={selectedTabIndex}
            onChangeIndex={onChangeTab}
          >
            <div className={styles.slide}>
              <ShowOverview show={show} />
            </div>
            <div className={styles.slide}>
              <p>Similar shows here</p>
            </div>
            <div className={styles.slide}>
              <GridList cellHeight={50}>
                {show.cast.edges.map(edge => (
                  this.renderCastMember(edge.node)
                ))}
              </GridList>
            </div>
          </SwipeableViews>
        </div>
      </div>
    )
  }
}

const JawboneContainer = Relay.createContainer(Jawbone, {
  fragments: {
    show: () => Relay.QL`
      fragment on Show {
        title
        poster
        fullPlot
        genre
        runtime
        year
        rating
        cast(first: 20) {
          edges {
            node {
              fullName
            }
          }
        }
        directors(first: 10) {
          edges {
            node {
              fullName
            }
          }
        }
      }
    `
  }
})

function mapDispatchToProps(dispatch) {
  return {
    onChangeTab: (value) => dispatch(changeSelectedTab(value))
    , dispatch
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  selectTab()
  , (selectedTabIndex) => ({ selectedTabIndex })
), mapDispatchToProps)(JawboneContainer)
