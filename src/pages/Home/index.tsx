import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { AllCountriesResponse } from '../../@types/types'
import RegionFilter from '../../components/RegionFilter'
import SearchInput from '../../components/SearchInput'
import api from '../../services/api'
import { CountryCards, MainContainer } from './style'

export default function Home() {
  const [countries, setCountries] = useState<AllCountriesResponse[]>([])

  useEffect(() => {
    async function apiHandler() {
      const response: AxiosResponse<AllCountriesResponse[]> = await api.get('all')
      setCountries(response.data)
    }
    apiHandler()
  }, [])

  // console.log(countries)

  return (
    <>
      <div className='filter-search-options'>
        <SearchInput />
        <RegionFilter />
      </div>
      <MainContainer>
        {countries.map((country) => (
          <CountryCards key={country.altSpellings[0]}>
            <img src={country.flags.png} alt='Flags of each country in the world' />
            <h4>{country.name.common}</h4>
            <strong>
              Population: <span>{new Intl.NumberFormat('pt-BR').format(country.population)}</span>
            </strong>
            <strong>
              Region: <span>{country.region}</span>
            </strong>
            <strong>
              Capital: <span>{country.capital}</span>
            </strong>
          </CountryCards>
        ))}
      </MainContainer>
    </>
  )
}
