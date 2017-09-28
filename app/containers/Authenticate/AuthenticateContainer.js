import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

export default class AuthenticateContainer extends React.Component{
  handleAuth(){
    auth().then((user)=>{
      console.log('Authed user: ' + user)
    })
  }

  render(){
    return (
      <div>
        <Authenticate
          isFetching={false}
          error=''
          onAuth={this.handleAuth}/>
      </div>
    )
  }
}
