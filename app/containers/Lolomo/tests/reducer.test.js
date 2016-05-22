import expect from 'expect'
import lolomoReducer from '../reducer'

describe('lolomoReducer', () => {
  it('returns the initial state', () => {
    expect(lolomoReducer(undefined, {})).toEqual({})
  })
})
