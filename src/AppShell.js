import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppHeader from './modules/app-header/AppHeader'
import AppFooter from './modules/app-footer/AppFooter'

import Home from './routes/home/Home'
import NoRouteMatch from './routes/NoRouteMatch'

import './styles/app.css'
import './styles/screen.css'

const AppShell = props => (
  <BrowserRouter>
    <header id="app-header">
      <AppHeader />
    </header>
    <main id="app-main">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ NoRouteMatch } />
      </Switch>
    </main>
    <footer id="app-footer">
      <AppFooter />
    </footer>
  </BrowserRouter>
)

AppShell.displayName = 'AppShell'

export default AppShell