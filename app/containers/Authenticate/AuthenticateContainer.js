import React from 'react'
import {Authenticate} from 'components'
import auth from 'helpers/auth'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActionCreaters from 'redux/modules/users'

class AuthenticateContainer extends React.Component
{

  handleAuth = () => {
    this.props.fetchingUser()

    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      console.log(user)
    }).catch((error) => {
      this.props.userActionCreaters.fetchingUserFailure(error)
    })
  }

  render() {
    console.log('isFetching: ' + this.props.isFetching)
    return (
      <div>
        <Authenticate isFetching={this.props.isFetching} error={this.props.error} onAuth={this.handleAuth}/>
      </div>
    )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUser: PropTypes.func.isRequired,
  fetchingUserSuccess:PropTypes.func.isRequired,
  fetchingUserFailure:PropTypes.func.isRequired,

}

function mapStateToProps(state) {
  console.log(state);
  return {isFetching: state.isFetching, error: state.error}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreaters, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
