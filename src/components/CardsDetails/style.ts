import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  background: ${({ theme }: Theme) => theme.element};
  color: ${({ theme }: Theme) => theme.text};
  box-shadow: 0 0 0.5rem 0.15rem ${({ theme }: Theme) => theme.shadow};
  border-radius: 0.5rem;
  min-height: 60vh;
  width: 95%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  transition: all 0.5s linear;

  @media (max-width: 860px) {
    min-height: 50vh;
  }

  li {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    gap: 1.5rem;

    @media (max-width: 860px) {
      align-items: center;
      flex-direction: column;
    }

    img {
      border-radius: 0.5rem;
      width: 300px;
      height: 180px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.75rem;

      @media (max-width: 860px) {
        width: 100%;
      }

      h4 {
        font-size: 1.25rem;
        margin: 0 auto 0 0;
        border-bottom: 2px solid royalblue;
      }

      strong {
        margin-right: auto;

        span {
          font-weight: 300;
        }
      }
    }
  }
`
