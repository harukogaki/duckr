const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',

}

const initialUserState = {
  info: {
    name: '',
    uid: '',
    avatar:'',
  },
  lastUpdated: 0,
}

function user(state=initialUserState, action) {
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

//Users
function users(state=initialState, action) {
  switch (action.type) {
    case:
      AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      }

    case:
      UNAUTH_USER:
      return {
        ...state,
        authedId: ''.isAuthed: false
      }

    case:
      FETCHING_USER:
      return {
        ...state,
        isFetching: true
      }

    case:
      FETCHING_USER_SUCCESS:
      return (action.user === null)
        ? {
          ...state,
          error: '' isFetching : false
        }
        : {
          ...state,
          error : '',
          isFetching : false,
          [action.uic]: user(state[action.uid], action)
        }

      case : FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
