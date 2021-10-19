import { Link } from 'react-router-dom'
import { AllCountriesResponse } from '../../@types/types'
import { CountryCards } from './style'

interface CardsProps {
  countries: AllCountriesResponse[]
}

export default function Cards({ countries }: CardsProps) {
  return (
    <>
      {countries.map((country) => (
        <Link
          style={{ textDecoration: 'none' }}
          to={`name/${country.name.common}`}
          key={country.name.common}
        >
          <CountryCards>
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
        </Link>
      ))}
    </>
  )
}
