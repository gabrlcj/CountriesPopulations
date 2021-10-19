export interface AllCountriesResponse {
  borders: string[]
  capital: string
  continents: string
  flag: string
  flags: {
    png: string
  }
  name: {
    common: string
  }
  population: number
  region: string
  subregion: string
  timezones: string[]
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
