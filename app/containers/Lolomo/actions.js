/*
 *
 * Lolomo actions
 *
 */

import
{ DEFAULT_ACTION
  , SHOW_JAWBONE
} from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  }
}

export function showJawbone(showId) {
  return {
    type: SHOW_JAWBONE
    , showId
  }
}
