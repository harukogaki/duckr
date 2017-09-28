import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

FaceBookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function  FaceBookAuthButton({onAuth, isFetching}) {
  return (
    <button className={button} onClick={onAuth}>
      {isFetching === true
      ? 'Loading'
      : 'Login with FaceBook'}
    </button>
  )
}
