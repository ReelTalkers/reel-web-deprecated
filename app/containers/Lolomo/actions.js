/*
 *
 * Lolomo actions
 *
 */

import
{ DEFAULT_ACTION
  , TOGGLE_JAWBONE
} from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  }
}

export function toggleJawbone(showId, rowId) {
  return {
    type: TOGGLE_JAWBONE
    , showId
    , rowId
  }
}
