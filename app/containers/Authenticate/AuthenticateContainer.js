import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AuthenticateContainer extends React.Component
{
  handleAuth(){
    auth().then((user)=>{
      console.log(user)
    })
  }

  render(){
    return (
      <div>
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.this.props.error}
          onAuth={this.handleAuth}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(AuthenticateContainer)
