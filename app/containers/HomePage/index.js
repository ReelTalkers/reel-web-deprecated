/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import shouldPureComponentUpdate from 'react-pure-render/function'

import { createSelector } from 'reselect'

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors'

import {
  selectUsername,
} from './selectors'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import SearchBar from 'components/SearchBar'

import styles from './styles.css'

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
    let mainContent = null

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />)

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem content={'Something went wrong, please try again!'} />
      )
      mainContent = (<List component={ErrorComponent} />)
    }

    return (
      <article>
        <section>
          <SearchBar
            results={[]}
            onUpdateInput={() => {}}
          />
        </section>
        <section>
          {mainContent}
        </section>
      </article>
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
