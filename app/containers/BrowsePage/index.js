/*
 *
 * BrowsePage
 *
 */

import React from 'react'
import Relay from 'react-relay'

import BrowseHeader from 'containers/BrowseHeader'

class BrowsePage extends React.Component {
  render() {
    return (
      <article>
        <BrowseHeader viewer={this.props.viewer} />
        <section>
          <p>reel stuff</p>
        </section>
      </article>
    )
  }
}


export default Relay.createContainer(BrowsePage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        ${BrowseHeader.getFragment('viewer')}
      }
    `
  }
})
