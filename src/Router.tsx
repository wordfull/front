import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Top } from 'pages'

const Path = {
  top: '/',
  test: '/test',
}

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Path.top} component={Top} />
    </Switch>
  </BrowserRouter>
)

export default Router
