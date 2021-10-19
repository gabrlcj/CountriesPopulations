import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const CountryContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  margin: 3rem auto 3rem 5rem;
  background: ${({ theme }: Theme) => theme.element};
  box-shadow: 0 0 0.5rem 0.15rem ${({ theme }: Theme) => theme.shadow};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.5s linear;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.75rem 1rem;

    button {
      border: 0;
      color: ${({ theme }: Theme) => theme.text};
      background: 0;
    }

    svg {
      font-size: 1.5rem;
      color: ${({ theme }: Theme) => theme.text};
    }
  }
`
