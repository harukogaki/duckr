import React from 'react'
import {Router, Route} from 'react-router'
import {MainContainer} from '../containers'
import {HashRouter} from 'react-router-dom'

const routes = (
  <HashRouter>
    <Route path='/' component= {MainContainer} />
  </HashRouter>
)

export default routes;
