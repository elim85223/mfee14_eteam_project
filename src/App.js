import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CoffeeIntroduceGlobal from './pages/coffee-introduce/coffee-introduce-global'

function App() {
  return (
    <Router>
      <>
        {/* LINK連結區塊，開發用 */}
        <Link to="/coffee-introduce/coffee-introduce-global">
          coffee-introduce-global
        </Link>
        <hr />
        {/* 路由表 */}
        <Switch>
          <Route path="/coffee-introduce/coffee-introduce-global">
            <CoffeeIntroduceGlobal />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
