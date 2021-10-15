import { AllCountriesResponse } from '../../@types/types'
import api from '../../services/api'
import { AxiosResponse } from 'axios'
import { FormEvent, useEffect, useState } from 'react'

import Cards from '../../components/Cards'
import Loading from '../../components/Loading'
import { FilterSearchOptions, InputContainer, MainContainer, SelectContainer } from './style'
import { BiSearchAlt } from 'react-icons/bi'

export default function Home() {
  const [countries, setCountries] = useState<AllCountriesResponse[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function apiHandler() {
      if (filter === 'all') {
        setLoading(true)
        const response: AxiosResponse<AllCountriesResponse[]> = await api.get('all')
        setCountries(response.data)
        setLoading(false)
      } else {
        setLoading(true)
        const response: AxiosResponse<AllCountriesResponse[]> = await api.get(`region/${filter}`)
        setCountries(response.data)
        setLoading(false)
      }
      setError('')
    }
    apiHandler()
  }, [filter])

  async function handleNameSearch() {
    try {
      setLoading(true)
      const response: AxiosResponse<AllCountriesResponse[]> = await api.get(`name/${search}`)
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
          {error ? (
            <div className='error'>
              <input
                type='search'
                name='search'
                placeholder='Search for a country...'
                onChange={(e) => setSearch(e.target.value)}
              />
              <strong>{error}</strong>
            </div>
          ) : (
            <input
              type='search'
              name='search'
              placeholder='Search for a country...'
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </InputContainer>
        <SelectContainer name='select-region' onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>All</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
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
