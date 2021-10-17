import styled from 'styled-components'
import { Theme } from '../../@types/types'

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-auto-rows: 320px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 5.5rem;
  padding: 1.5rem 5rem;
`

export const FilterSearchOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 5rem;
  margin: 0 auto;
`

export const InputContainer = styled.form`
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
      font-size: 1.5rem;
      margin: 0 auto;
      min-width: 3rem;
      color: ${({ theme }: Theme) => theme.text};
    }
  }

  input {
    position: relative;
    width: 500px;
    padding: 1rem 3rem;
    border-radius: 0.25rem;
    border: 0;
    color: ${({ theme }: Theme) => theme.text};
    background: ${({ theme }: Theme) => theme.input};
    transition: all 0.5s linear;

    &::placeholder {
      color: ${({ theme }: Theme) => theme.text};
    }
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    input {
      border: 1px solid red;
    }

    strong {
      color: red;
      position: absolute;
      bottom: -70%;
    }
  }
`

export const SelectContainer = styled.select`
  width: 180px;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  color: ${({ theme }: Theme) => theme.text};
  background: ${({ theme }: Theme) => theme.input};
  transition: all 0.5s linear;
`
