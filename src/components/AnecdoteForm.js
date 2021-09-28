import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  // console.log(setNotification)
  // console.log(props.setNotification)

  const id = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newId = id()
    event.target.anecdote.value = ''
    props.createAnecdote(content, newId)
    props.setNotification(`you added '${content}'`)
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
    },
    setNotification: value => {
      dispatch(setNotification(value, 10))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)