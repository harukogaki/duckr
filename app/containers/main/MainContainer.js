import React, { Component } from 'react'
import { container, innerContainer } from './styles.css'
import { HomeContainer } from 'containers'
import { Navigation } from 'components'

export default class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false}/>
        <div className={innerContainer}>
          <HomeContainer />
        </div>
      </div>
    )
  }
}
