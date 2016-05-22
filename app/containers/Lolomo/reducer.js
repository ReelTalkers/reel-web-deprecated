/*
 *
 * Lolomo reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION
  , TOGGLE_JAWBONE
} from './constants'

const initialState = fromJS({
  jawbone: { showId: null, rowId: null }
})

function lolomoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case TOGGLE_JAWBONE:
      const { showId, rowId } = action
      return state.set('jawbone', { showId, rowId })
    default:
      return state
  }
}

export default lolomoReducer
