export interface RepositoryItem {
  name: string
  url: string
  stars: number
  forks: number
}

export interface QueryRepositoriesData {
  search: {
    repositoryCount: number
    nodes: QueryRepositoryData[]
  }
}

export interface QueryRepositoriesVars {
  queryString: string
}

export interface QueryRepositoryData {
  id: string
  name: string
  url: string
  forkCount: number
  stargazers: {
    totalCount: number
  }
}
