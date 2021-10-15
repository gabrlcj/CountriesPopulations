export interface AllCountriesResponse {
  altSpellings: string[]
  flags: {
    png: string
  }
  name: {
    common: string
  }
  population: number
  region: string
  capital: string
}

export interface CountryDetails extends AllCountriesResponse {
  continents: string
  currencies: string[]
  subRegion: string
  languages: {
    lang: string
  }
  borders: string[]
}

export interface Theme {
  theme: {
    background: string
    element: string
    text: string
    input: string
    shadow: string
  }
}
