/*
 *
 * Jawbone actions
 *
 */

import
{ CHANGE_TABS
} from './constants'

export function changeSelectedTab(tabIndex) {
  return {
    type: CHANGE_TABS
    , tabIndex
  }
}
