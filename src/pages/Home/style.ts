import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-auto-rows: 300px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 5.5rem;
  padding: 1.5rem 5rem;
`

export const CountryCards = styled.li`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 0.5rem;

  background: ${({ theme }: Theme) => theme.background};
  color: ${({ theme }: Theme) => theme.text};
  box-shadow: 0 0 0.5rem 0.25rem ${({ theme }: Theme) => theme.shadow};
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transition: all 0.5s linear;

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
    margin-left: 2.25rem;

    span {
      font-weight: 300;
    }
  }
`
