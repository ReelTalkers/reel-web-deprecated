/**
*
* SearchBar
*
*/

import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import styles from './styles.css'

function SearchBar(props) {
  return (
    <div className={ styles.searchBar }>
      <AutoComplete
        hintText="Search..."
        dataSource={ props.results }
        onUpdateInput={ props.onUpdateInput }
        />
    </div>
  )
}

SearchBar.defaultProps = {
  results: [],
  onUpdateInput: () => {},
}

export default SearchBar
