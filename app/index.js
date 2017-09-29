import React from 'react'
import ReactDOM from 'react-dom'
import {MainContainer} from 'containers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import users from 'redux/modules/users'
const store = createStore(users)

ReactDOM.render(
  <Provider store={store}>
  <MainContainer/>
</Provider>, document.getElementById('app'))
