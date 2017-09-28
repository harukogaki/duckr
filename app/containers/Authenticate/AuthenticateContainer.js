import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

export default class AuthenticateContainer extends React.Component{

  render(){
    return (
      <div>
        <Authenticate />
      </div>
    )
  }
}
