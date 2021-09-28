import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
// import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  console.log(createAnecdote)
  console.log(props.createAnecdote)

  const id = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newId = id()
    event.target.anecdote.value = ''
    props.createAnecdote(content, newId)
    // props.setNotification(`'${content}' has been added`, 50)
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote} >
            <div><input name='anecdote'/></div>
            <button type='submit'>create</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)