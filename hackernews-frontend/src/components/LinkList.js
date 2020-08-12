import React, { Component } from 'react'
import Link from './Link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const LINKS_QUERY = gql`
  {
    links {
      id
      url
      description
      postedBy {
        id
        username
      }
      votes {
        edges {
          node {
            user {
              username
            }
          }
        }
      }
    }
  }
`
class LinkList extends Component {
  render() {
    return (
      <Query query={LINKS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data.links

          return (
            <div>
              {linksToRender.map((link, index) => <Link key={link.id} link={link} index={index} updateStoreAfterVote={this._updateCacheAfterVote} />)}
            </div>
          )
        }}
      </Query>
    )
  }

  _updateCacheAfterVote = (store, createVote, linkId) => {
    const data = store.readQuery({ query: LINKS_QUERY })

    const votedLink = data.links.find(link => link.id === linkId)
    votedLink.votes.edges = createVote.link.votes.edges

    store.writeQuery({ query: LINKS_QUERY, data })
  }
}

export default LinkList