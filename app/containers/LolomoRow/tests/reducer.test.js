import expect from 'expect'
import lolomoRowReducer from '../reducer'

describe('lolomoRowReducer', () => {
  it('returns the initial state', () => {
    expect(lolomoRowReducer(undefined, {})).toEqual({})
  })
})
