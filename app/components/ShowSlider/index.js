/**
*
* ShowSlider
*
*/

import React from 'react'
import Slider from 'components/Slider'
import SliderItem from 'components/SliderItem'
import TitleCard from 'components/TitleCard'
import ShowRating from 'components/ShowRating'

import styles from './styles.css'

function renderSliderItem(show, id, showRating) {
  return (
    <SliderItem key={id}>
      <TitleCard
        id={show.id}
        title={show.title}
        poster={show.poster}
        onClick={(evt) => props.onShowClick(evt, show.id, id)}
      />
    {showRating &&
      <ShowRating rating={show.metacritic} />
    }
    </SliderItem>
  )
}

function ShowSlider(props) {
  return (
    <div className={styles.showSlider}>
      <Slider>
        {props.shows.map((show, index) => (
          renderSliderItem(show, index, props.showRatings)
        ))}
      </Slider>
    </div>
  )
}

export default ShowSlider
