import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ItemsIndex from './pages/items/items-index'
import ItemInfo from './pages/items/items-info'

function App() {
  return (
    <Router>
      <>
        {/* LINK連結區塊，開發用 */}
        <Link to="/items/index">| items-index |</Link>
        <Link to="/items/info">| items-info |</Link>
        <hr />
        {/* 路由表 */}
        <Switch>
          <Route path="/items/index">
            <ItemsIndex />
          </Route>
          <Route path="/items/info/:iId?">
            <ItemInfo />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
