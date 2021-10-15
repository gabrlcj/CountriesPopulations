export interface AllCountriesResponse {
  altSpellings: string[]
  borders: string[]
  capital: string
  continents: string
  currencies: string[]
  flags: {
    png: string
  }
  name: {
    common: string
  }
  population: number
  region: string
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
