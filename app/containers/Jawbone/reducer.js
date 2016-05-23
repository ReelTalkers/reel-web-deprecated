/*
 *
 * Jawbone reducer
 *
 */

import { fromJS } from 'immutable'
import {
  CHANGE_TABS
} from './constants'

const initialState = fromJS({
  selectedTabIndex: 0
})

function lolomoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TABS:
      return state.set('selectedTabIndex', action.tabIndex)
    default:
      return state
  }
}

export default lolomoReducer
