import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const SelectContainer = styled.select`
  width: 180px;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  color: ${({ theme }: Theme) => theme.text};
  background: ${({ theme }: Theme) => theme.background};
  transition: all 0.5s linear;
`
