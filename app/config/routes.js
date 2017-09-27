import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {MainContainer, HomeContainer} from 'containers'
import {BrowserRouter, Switch} from 'react-router-dom'

const routes = (
  // <BrowserRouter>
  //   <Route path='/' component= {MainContainer} />
  // </BrowserRouter>
  <BrowserRouter path='/' component= {MainContainer}>
      <Switch>
        <Route exact component={HomeContainer}/>
      </Switch>
  </BrowserRouter>
)

export default routes
