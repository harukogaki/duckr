import React from 'react'
import {Route} from 'react-router'
import {MainContainer} from 'containers'
import {BrowserRouter} from 'react-router-dom'

const routes = (
  <BrowserRouter>
    <Route path='/' component= {MainContainer} />
  </BrowserRouter>
)

export default routes
