/*
 *
 * LolomoRow
 *
 */

import React from 'react'
import Relay from 'react-relay'

import { connect } from 'react-redux'

import H1 from 'components/H1'
import Slider from 'components/Slider'
import SliderItem from 'components/SliderItem'
import TitleCard from 'components/TitleCard'

import styles from './styles.css'

class LolomoRow extends React.Component {

  renderSliderItem(show) {
    return (
      <SliderItem key={show.id}>
        <TitleCard title={show.title} poster={show.poster} />
      </SliderItem>
    )
  }

  render() {
    const { shows, name } = this.props
    return (
      <div className={styles.lolomoRow}>
        <H1 className={styles.rowHeader}>{name}</H1>
        <div className={styles.row}>
          <Slider>
            {shows.edges.map(edge => (
              this.renderSliderItem(edge.node)
            ))}
          </Slider>
        </div>
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
