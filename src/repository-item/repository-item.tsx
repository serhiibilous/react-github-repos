import React from 'react'
import { RepositoryItem as RepositoryItemProps } from '../types'
import { Link, Container, Section, Image } from './repository-item-components'

export default function RepositoryItem({ name, url, stars, forks }: RepositoryItemProps) {
  return (
    <Container>
      <Section>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      </Section>
      <Section>
        <Image>
          <span role="img" aria-label="star">
            🌟
          </span>
        </Image>
        {stars}
      </Section>
      <Section>
        <Image>
          <span role="img" aria-label="forks">
            🍴
          </span>
        </Image>
        {forks}
      </Section>
    </Container>
  )
}
