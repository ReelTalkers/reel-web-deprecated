/*
 *
 * UniversalSearch
 *
 */

import React, { PropTypes as T } from 'react'
import Relay from 'react-relay'

import SearchBar from 'components/SearchBar'
import MenuItem from 'material-ui/MenuItem'

function getResults(shows, users) {
  if (!shows) return []
  const showResults = shows.edges.map(edge => {
    const show = edge.node
    const firstCastMember = show.cast.edges[0].node
    return {
      text: show.title
      , value: (
        <MenuItem
          primaryText={show.title}
          secondaryText={firstCastMember.fullName}
        />
      )
    }
  })
  if (!users) return showResults

  const userResults = users.edges.map(edge => ({
    text: `${edge.node.firstName} ${edge.node.lastName}`
    , value: (
      <MenuItem
        primaryText={`${edge.node.firstName} ${edge.node.lastName}`}
      />
      )
  }))
  return showResults.concat(userResults)
}

class UniversalSearch extends React.Component {

  static propTypes =
    { relay: T.object.isRequired
    , viewer: T.object.isRequired
    }

  handleUpdateInput = (searchText) => {
    this.props.relay.setVariables({ searchText })
  }

  render() {
    const { viewer } = this.props
    const { shows, users } = viewer
    return (
      <div>
        <SearchBar
          results={getResults(shows, users)}
          onUpdateInput={this.handleUpdateInput}
          maxSearchResults={3}
        />
      </div>
    )
  }
}


export default Relay.createContainer(UniversalSearch,
  { initialVariables: {
    searchText: ''
  }
  , fragments: {
    viewer: () => Relay.QL`
      fragment on Query {
        shows: allShows(first: 3, title__contains:$searchText) {
          edges {
            node {
              id
              title
              poster
              cast(first: 1) {
                edges {
                  node {
                    id
                    fullName
                  }
                }
              }
            }
          }
        }
        users: allUserProfiles(first: 3, user__first_name__contains:$searchText) {
          edges {
            node {
              id
              user {
                firstName
                lastName
              }
            }
          }
        }
      }
    `
  }
})
