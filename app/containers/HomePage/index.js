/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import Relay from 'react-relay'
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8000/graphql')
)

import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import shouldPureComponentUpdate from 'react-pure-render/function'
import ViewerRoute from '../../routes/ViewerRoute'

import { createSelector } from 'reselect'

import {
  selectRepos,
  selectLoading,
  selectError
} from 'containers/App/selectors'

import {
  selectUsername
} from './selectors'

import BrowsePage from 'containers/BrowsePage'

// import styles from './styles.css'

export class HomePage extends React.Component {
  shouldComponentUpdate = shouldPureComponentUpdate

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route)
  }

  render() {
    return (
      <Relay.RootContainer
        Component={BrowsePage}
        route={new ViewerRoute()}
      />
    )
  }
}

HomePage.propTypes =
  { changeRoute: React.PropTypes.func
  , loading: React.PropTypes.bool
  , error: React.PropTypes.oneOfType(
    [ React.PropTypes.object
    , React.PropTypes.bool
    ])
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url))
    , dispatch
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(createSelector(
  selectRepos(),
  selectUsername(),
  selectLoading(),
  selectError(),
  (repos, username, loading, error) => ({ repos, username, loading, error })
), mapDispatchToProps)(HomePage)
