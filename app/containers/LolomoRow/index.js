/*
 *
 * LolomoRow
 *
 */

import React from 'react'
import Relay from 'react-relay'

import { connect } from 'react-redux'

import Slider from 'components/Slider'
import TitleCard from 'components/TitleCard'

import styles from './styles.css'

class LolomoRow extends React.Component {

  renderTitleCard(show) {
    return (
      <TitleCard title={show.title} poster={show.poster} />
    )
  }

  render() {
    const { shows } = this.props
    return (
      <div className={styles.lolomoRow}>
        <Slider>
          {shows.edges.map(edge => (
            this.renderTitleCard(edge.node)
          ))}
        </Slider>
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
  }
})
