import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const CountryCards = styled.li`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 0.75rem;

  background: ${({ theme }: Theme) => theme.background};
  color: ${({ theme }: Theme) => theme.text};
  box-shadow: 0 0 0.5rem 0.25rem ${({ theme }: Theme) => theme.shadow};
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  transition: all 0.5s linear;

  &:hover {
    transform: scale(1.025);
    cursor: pointer;
  }

  img {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  h4 {
    margin-right: auto;
    margin-left: 1.75rem;
    font-size: 1.25rem;
  }

  strong {
    margin-right: auto;
    margin-left: 2.5rem;

    span {
      font-weight: 300;
    }
  }
`
