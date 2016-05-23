/*
 *
 * Jawbone
 *
 */

import React from 'react'
import Relay from 'react-relay'
import Avatar from 'material-ui/Avatar'
import GridList from 'material-ui/GridList'
import { Tabs, Tab } from 'components/Tabs'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectTab } from './selectors'
import { changeSelectedTab } from './actions'

import Img from 'components/Img'
import H1 from 'components/H1'

import styles from './styles.css'

class Jawbone extends React.Component {
  renderCastMember(person) {
    return (
      person.avatar ?
        <Avatar src={person.avatar} /> :
        <Avatar>{person.fullName[0]}</Avatar>
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
          <Tabs
            value={selectedTabIndex}
            onChange={onChangeTab}
          >
            <Tab label="Overview" value={0}>
              <div>
                <p>{show.plot}</p>
              </div>
            </Tab>
            <Tab label="Similar" value={1}>
              <div>
                <p>Similar shows here</p>
              </div>
            </Tab>
            <Tab label="Cast" value={2}>
              <GridList cellHeight={20}>
                {show.cast.edges.map(edge => (
                  this.renderCastMember(edge.node)
                ))}
              </GridList>
            </Tab>
          </Tabs>
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
        plot
        cast(first: 20) {
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
