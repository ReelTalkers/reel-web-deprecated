/*
 *
 * Jawbone
 *
 */

import React from 'react'
import Relay from 'react-relay'
import Avatar from 'material-ui/Avatar'
import GridList from 'material-ui/GridList'
import { Tabs, Tab } from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'

import { connect } from 'react-redux'


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
    const { show } = this.props
    return (
      <div className={styles.jawbone}>
        <Img className={styles.poster} src={show.poster} alt={show.title} />
        <div className={styles.infoPanel}>
          <div className={styles.titleBar}>
            <H1 className={styles.title}>{show.title}</H1>
            <H1 className={styles.closeButton}>X</H1>
          </div>
          <Tabs>
            <Tab className={styles.headline} label="Overview">
              <p>{show.plot}</p>
            </Tab>
            <Tab className={styles.headline} label="Similar">
              <p>Similar shows here</p>
            </Tab>
            <Tab className={styles.headline} label="Cast">
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

export default Relay.createContainer(Jawbone, {
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
