import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  border: 0;
  background: 0;
  color: ${({ theme }: Theme) => theme.text};
  transition: all 0.5s linear;
  position: relative;

  span {
    display: flex;
    align-items: center;
  }
`
