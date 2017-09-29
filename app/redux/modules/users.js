import auth from 'helpers/auth'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

// Users
function authUser(uid) {
  return {type: AUTH_USER, uid}
}

function unauthUser() {
  return {type: UNAUTH_USER}
}

function fetchingUser() {
  return {type: FETCHING_USER}
}

function fetchingUserFailure() {
  return {type: FETCHING_USER_FAILURE, error: 'Error fetching user.'}
}

function fetchingUserSuccess(uid, user, timestamp) {
  return {type: FETCHING_USER_SUCCESS, uid, user, timestamp}
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

const initialUserState = {
  info: {
    name: '',
    uid: '',
    avatar: ''
  },
  lastUpdated: 0
}

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }
    default:
      return state
  }
}

export function fetchAndHandleAuthedUser(){
  return function(dispatch){
    dispatch(fetchingUser())

    auth().then((user) => {
      dispatch(fetchingUserSuccess(user.uid, user, Date.now()))
      console.log(user)
    }).catch((error) => {
      dispatch(userActionCreaters.fetchingUserFailure(error))
    })
  }
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case
      AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }

    case
      UNAUTH_USER:
      return {
        ...state,
        authedId: '',
        isAuthed: false
      }

    case
      FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }

    case
      FETCHING_USER_SUCCESS:
      return (action.user === null)
        ? {
          ...state,
          error: '',
          isFetching: false
        }
        : {
          ...state,
          error : '',
          isFetching : false,
          [action.uid]: user(state[action.uid], action)
        }

      case FETCHING_USER_FAILURE : return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
