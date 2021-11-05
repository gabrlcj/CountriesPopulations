import { AllCountriesResponse } from '../../@types/types'
import { DetailsContainer } from './style'

interface CardsDetailsProps {
  countries: AllCountriesResponse[]
}

export default function CardsDetails({ countries }: CardsDetailsProps) {
  return (
    <DetailsContainer>
      {countries.map((country) => (
        <li key={country.name.common}>
          <img src={country.flags.png} alt={country.name.common} />
          <div>
            <h4>{country.name.common}</h4>
            <strong>
              Capital: <span>{country.capital}</span>
            </strong>
            <strong>
              Population:{' '}
              <span>
                {new Intl.NumberFormat('pt-BR').format(country.population)}
              </span>
            </strong>
            <strong>
              Borders: <span>{country.borders?.join(', ')}</span>
            </strong>
          </div>
          <div>
            <strong>
              SubRegion: <span>{country.subregion}</span>
            </strong>
            <strong>
              Timezones: <span>{country.timezones}</span>
            </strong>
            <strong>
              Flag: <span>{country.flag}</span>
            </strong>
          </div>
        </li>
      ))}
    </DetailsContainer>
  )
}
