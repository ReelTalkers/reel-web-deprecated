/**
*
* ShowOverview
*
*/

import React from 'react'

import styles from './styles.css'

function ShowOverview(props) {
  const { show } = props
  return (
    <div className={styles.showOverview}>
      <p>{show.fullPlot}</p>
      <br />
      <p>{`Director${show.directors.edges.length > 1 ? 's' : ''}: ${show.directors.edges.map(edge => edge.node.fullName).join(', ')}`}</p>
      <p>{`Starring: ${show.cast.edges.map(edge => edge.node.fullName).join(', ')}`}</p>
      <br />
      <div className={styles.row}>
        <span>🍅 100%</span>
        <span className={styles.great}>Great</span>
        <span>{show.genre}</span>
        <span>{show.runtime}</span>
        <span>{show.year}</span>
        <span>{show.rating}</span>
      </div>
    </div>
  )
}

export default ShowOverview
