import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { AllCountriesResponse } from '../../@types/types'
import CardsDetails from '../../components/CardsDetails'
import Loading from '../../components/Loading'
import api from '../../services/api'
import { ButtonContainer, CountryContainer } from './style'
import { FiChevronsLeft } from 'react-icons/fi'

export default function Country({ match }: RouteComponentProps) {
  const [countries, setCountries] = useState<AllCountriesResponse[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function handleApiResponse() {
      const response: AxiosResponse<AllCountriesResponse[]> = await api.get(`${match.url}`)
      setCountries(response.data)
      setLoading(false)
    }
    handleApiResponse()
  }, [match.url])

  return (
    <CountryContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonContainer>
            <Link to='/'>
              <FiChevronsLeft />
              <button>Go Back</button>
            </Link>
          </ButtonContainer>
          <CardsDetails countries={countries} />
        </>
      )}
    </CountryContainer>
  )
}
