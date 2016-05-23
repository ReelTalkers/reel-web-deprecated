import { createSelector } from 'reselect'

const selectJawbone = () => (state) => state.get('jawbone')

const selectTab = () => createSelector(
  selectJawbone(),
  (state) => state.get('selectedTabIndex')
)

export {
  selectTab
}
