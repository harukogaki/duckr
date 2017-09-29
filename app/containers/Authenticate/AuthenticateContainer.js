import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as userActionCreaters from 'redux/modules/users'

class AuthenticateContainer extends React.Component
{

  handleAuth = () => {
    this.props.dispatch(userActionCreaters.fetchingUser())

    auth()
    .then((user)=>{
      this.props.dispatch(userActionCreaters.fetchingUserSuccess(user.uid, user, Date.now()))
      console.log(user)
    })
    .catch((error) => { this.props.dispatch(userActionCreaters.fetchingUserFailure(error))})
  }

  render(){
    console.log('isFetching: ' + this.props.isFetching)
    return (
      <div>
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={this.handleAuth}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
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
