/**
*
* SearchBar
*
*/

import React, { PropTypes as T } from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import styles from './styles.css'

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <AutoComplete
        hintText="Search..."
        dataSource={props.results}
        onUpdateInput={props.onUpdateInput}
      />
    </div>
  )
}

SearchBar.propTypes =
  { results: T.array
  , onUpdateInput: T.func
  }

SearchBar.defaultProps =
{ results: []
, onUpdateInput: () => {}
}

export default SearchBar
