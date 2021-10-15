import { SelectContainer } from './style'

export default function RegionFilter() {
  return (
    <SelectContainer name='select-region'>
      <option value='' disabled selected hidden>
        Filter by Region
      </option>
      <option value=''>Africa</option>
      <option value=''>America</option>
      <option value=''>Asia</option>
      <option value=''>Europe</option>
      <option value=''>Oceania</option>
    </SelectContainer>
  )
}
