import gql from 'graphql-tag'

export const QUERY_REPOS = gql`
  query Repos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          name
          forkCount
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  }
`
