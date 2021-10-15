import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const ToggleButton = styled.button`
  font-size: 1rem;
  border: 0;
  background: 0;
  color: ${({ theme }: Theme) => theme.text};
  transition: all 0.5s linear;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
