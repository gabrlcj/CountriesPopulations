import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  box-shadow: 0 0 0.5rem 0.25rem ${({ theme }: Theme) => theme.shadow};
  background: ${({ theme }: Theme) => theme.element};
  transition: all 0.5s linear;
`
