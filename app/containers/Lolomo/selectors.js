import { createSelector } from 'reselect'

const selectLolomo = () => (state) => state.get('lolomo')

const selectJawbone = () => createSelector(
  selectLolomo(),
  (state) => state.get('jawbone')
)

export {
  selectLolomo,
  selectJawbone
}
