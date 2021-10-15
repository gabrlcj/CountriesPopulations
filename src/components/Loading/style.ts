import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 2rem 0;

  div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    box-shadow: 0 -3rem 0 rgba(255, 60, 0, 1), 2.25rem -2.25rem rgba(255, 60, 0, 0.875),
      3rem 0 rgba(255, 60, 0, 0.75), 2.25rem 2.25rem rgba(255, 60, 0, 0.625),
      0 3rem rgba(255, 60, 0, 0.5), -2.25rem 2.25rem rgba(255, 60, 0, 0.375),
      -3rem 0 rgba(255, 60, 0, 0.25), -2.25rem -2.25rem rgba(255, 60, 0, 0.125);
    animation: spin 1.55s linear infinite;
  }

  h2 {
    margin-top: 4rem;
    color: ${({ theme }: Theme) => theme.text};
  }

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
`
