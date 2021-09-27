import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)







// import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
// import anecdoteService from './services/anecdotes'
// import { createStore } from 'redux'
// import { createAnecdote } from './reducers/anecdoteReducer'
// import { notification } from './reducers/notificationReducer'
// import { filterChange } from './reducers/filterReducer'

// anecdoteService.getAll().then(anecdotes =>
//   store.dispatch(initializeAnecdotes(anecdotes))
// )

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