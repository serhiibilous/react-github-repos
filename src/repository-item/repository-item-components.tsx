import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #ccc;
  display: flex;

  &:not(:last-child) {
    border-bottom: 0;
  }
`

export const Section = styled.div`
  border-right: 1px solid #ccc;
  padding: 5px;
  width: 33.33%;

  &:last-child {
    border: 0;
  }
`

export const Image = styled.span`
  padding: 0 10px 0 0;
`

export const Link = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: blue;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`
