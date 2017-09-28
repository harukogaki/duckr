import React, { Component } from 'react'
import { container, innerContainer } from './styles.css'
import { HomeContainer } from 'containers'
import { Navigation } from 'components'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export default class MainContainer extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={container}>
          <Navigation isAuthed={false}/>
          <div className={innerContainer}>
            <Route path='/' component={HomeContainer} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
