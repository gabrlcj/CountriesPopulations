import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  span {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.25rem;
      margin: 0 auto;
      min-width: 3rem;
      color: ${({ theme }: Theme) => theme.text};
    }
  }

  input {
    position: relative;
    width: 400px;
    padding: 0.75rem 3rem;
    border-radius: 0.25rem;
    border: 1px solid lightgrey;
    color: ${({ theme }: Theme) => theme.text};
    background: ${({ theme }: Theme) => theme.background};
    transition: all 0.5s linear;
  }
`
