import React from "react"

import Home from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const RouterMap = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
}

export default RouterMap