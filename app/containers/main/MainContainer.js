import React, { Component } from 'react'
import { container, innerContainer } from './styles.css'
import { AuthenticateContainer, HomeContainer } from 'containers'
import { Navigation } from 'components'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export default class MainContainer extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={container}>
          <Navigation isAuthed={false}/>
          <div className={innerContainer}>
            <Switch>
              <Route exact={true} path='/' component={HomeContainer} />
              <Route path='/auth' component={AuthenticateContainer} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
