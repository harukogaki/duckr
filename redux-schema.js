users : {
  isAuthed,
  isFetching,
  error,
  authedId,
  [uid]: {
    lastUpdated,
    info: {
      name,
      uid,
      avatar
    }
  }
},

ducks : {
  isFetching,
  error,
  [duckId]: {
    lastUpdated,
    info {
      duckId,
      avatar,
      duckId,
      name,
      text,
      timestamp
    }
  }
},

usersDucks : {
  isFetching,
  error,
  [uid]: {
    lastUpdated,
    duckIds: []
  }
},

likeCount : {
  [duckId]: 0
},

usersLikes : {
  [duckId]: true
},

modal : {
  duck,
  isOpen
}

replies : {
  isFetching,
  error,
  [duckId]: {
    replies: {
      lastUpdated,
      [replyId]: {
        name,
        comment,
        uid,
        timestamp,
        avatar
      }
    }
  }
},

listeners : {
  [listenersId]: true;
},

feed : {
  isFetching,
  error,
  newDucksAvailable,
  duckIdsToAdd: [
    duckId, duckId
  ],
  duckIds: [duckId, duckId]
}
