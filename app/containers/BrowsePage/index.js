/*
 *
 * BrowsePage
 *
 */

import React from 'react'
import Relay from 'react-relay'

import BrowseHeader from 'containers/BrowseHeader'
import Lolomo from 'containers/Lolomo'

class BrowsePage extends React.Component {
  render() {
    return (
      <article>
        <BrowseHeader viewer={this.props.viewer} />
        <section>
          <Lolomo viewer={this.props.viewer} />
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
        ${Lolomo.getFragment('viewer')}
      }
    `
  }
})
