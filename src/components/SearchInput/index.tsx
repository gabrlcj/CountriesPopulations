import { BiSearchAlt } from 'react-icons/bi'
import { InputContainer } from './style'

export default function SearchInput() {
  return (
    <InputContainer>
      <span>
        <BiSearchAlt />
      </span>
      <input type='search' name='search' placeholder='Search for a country...' />
    </InputContainer>
  )
}
