import { Route, Switch } from 'react-router-dom'
import Country from '../pages/Country'
import Home from '../pages/Home'

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Switch>
        <Route exact path='/name/:name' component={Country} />
      </Switch>
    </>
  )
}
