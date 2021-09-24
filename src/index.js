import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

// import { createAnecdote } from './reducers/anecdoteReducer'
// import { notification } from './reducers/notificationReducer'
// import { filterChange } from './reducers/filterReducer'
//...
// store.subscribe(() => console.log(store.getState()))
// // store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))
// import reducer from './reducers/anecdoteReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(
//   reducer,
//   composeWithDevTools()
//   )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)