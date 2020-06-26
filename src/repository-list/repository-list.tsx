import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { QueryRepositoriesData, QueryRepositoriesVars, QueryRepositoryData } from '../types'
import { QUERY_REPOS } from '../query'
import RepositoryItem from '../repository-item/repository-item'
import { QUERY_STRING } from '../constants'
import { Title, TotalCount } from './repository-list-components'

export default function RepositoryList() {
  const { loading, error, data } = useQuery<QueryRepositoriesData, QueryRepositoriesVars>(QUERY_REPOS, {
    variables: { queryString: QUERY_STRING },
  })

  if (loading) return <p>Loading repositories ...</p>
  if (error) return <p>Error with fetching data</p>

  return (
    <>
      <Title>Repositories list</Title>
      <TotalCount>
        Total count: <span className="font-weight-bold">{data!.search.repositoryCount}</span>
      </TotalCount>
      <div>
        {data!.search.nodes.map((repo: QueryRepositoryData) => {
          return (
            <RepositoryItem
              key={repo.id}
              name={repo.name}
              url={repo.url}
              stars={repo.stargazers.totalCount}
              forks={repo.forkCount}
            />
          )
        })}
      </div>
    </>
  )
}
