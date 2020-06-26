import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GITHUB_AUTH_TOKEN, QUERY_STRING, API_GITHUB_URL } from '../constants'
import RepositoryList from '../repository-list/repository-list'
import { Container, Title } from './app-components'

const client = new ApolloClient({
  uri: API_GITHUB_URL,
  headers: {
    authorization: `Bearer ${GITHUB_AUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Title>
          GitHub repositories which include <span className="font-weight-bold">`{QUERY_STRING}`</span> as a search word
        </Title>
        <div>
          <RepositoryList />
        </div>
      </Container>
    </ApolloProvider>
  )
}
