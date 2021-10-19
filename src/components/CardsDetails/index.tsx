import { AllCountriesResponse } from '../../@types/types'

interface CardsDetailsProps {
  countries: AllCountriesResponse[]
}

export default function CardsDetails({ countries }: CardsDetailsProps) {
  console.log(countries)
  return (
    <>
      {countries.map((country) => (
        <li key={country.name.common}>
          <img src={country.flags.png} alt={country.name.common} />
          <strong>
            Currencies: <span>{country.currencies}</span>
          </strong>
          <strong>
            Borders: <span>{country.borders.join(', ')}</span>
          </strong>
          <strong>
            Languages: <span>{country.languages.lang}</span>
          </strong>
        </li>
      ))}
    </>
  )
}
