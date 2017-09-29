import React from 'react'
import {Authenticate} from 'components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActionCreaters from 'redux/modules/users'

class AuthenticateContainer extends React.Component {
  handleAuth = () => {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
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
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {isFetching: state.isFetching, error: state.error}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreaters, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
