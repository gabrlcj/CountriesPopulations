import { AllCountriesResponse } from '../../@types/types'
import { FormEvent, useEffect, useState } from 'react'
import api from '../../services/api'

import Cards from '../../components/Cards'
import Loading from '../../components/Loading'
import { BiSearchAlt } from 'react-icons/bi'
import {
  FilterSearchOptions,
  InputContainer,
  MainContainer,
  SelectContainer,
} from './style'

export default function Home() {
  const [countries, setCountries] = useState<AllCountriesResponse[]>([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function apiHandler() {
      if (filter === 'all') {
        setLoading(true)
        try {
          const response = await api.get<AllCountriesResponse[]>('all')
          setCountries(response.data)
          setLoading(false)
        } catch (error) {
          setError(`Couldn't retrieve data from the api, ${error}`)
          setLoading(false)
        }
      } else {
        setLoading(true)
        try {
          const response = await api.get<AllCountriesResponse[]>(
            `region/${filter}`
          )
          setCountries(response.data)
          setLoading(false)
        } catch (error) {
          setError(`Couldn't retrieve data from the api, ${error}`)
          setLoading(false)
        }
      }
      setError('')
    }
    apiHandler()
  }, [filter])

  async function handleNameSearch() {
    setLoading(true)
    try {
      const response = await api.get<AllCountriesResponse[]>(`name/${search}`)
      setCountries(response.data)
      setLoading(false)
    } catch (error) {
      setError('Invalid name of country')
      setLoading(false)
    }
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    handleNameSearch()
    setError('')
  }

  return (
    <>
      <FilterSearchOptions>
        <InputContainer onSubmit={handleSearch}>
          <span>
            <BiSearchAlt />
          </span>
          <div className={error ? 'error' : ''}>
            <input
              type='search'
              name='search'
              placeholder='Search for a country...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <strong>{error}</strong>
          </div>
        </InputContainer>
        <SelectContainer
          name='select-region'
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='antarctic'>Antarctic</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </SelectContainer>
      </FilterSearchOptions>
      {loading === true ? (
        <Loading />
      ) : (
        <MainContainer>
          <Cards countries={countries} />
        </MainContainer>
      )}
    </>
  )
}
