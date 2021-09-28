import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const id = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newId = id()
    event.target.anecdote.value = ''
    props.createAnecdote(content, newId)
    props.setNotification(`${content} has been added'`, 10)
    // const newAnecdote = await anecdoteService.createNew(content, newId)
    // dispatch(createAnecdote(newAnecdote))
    // dispatch({
    //   type: 'NOTIFICATION',
    //   content
    // })
    // setTimeout(() => {
    //   dispatch({type: 'HIDE_NOTIFICATION'})
    // }, 2000)
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

export default connect(
  null, 
  { createAnecdote, setNotification }
)(AnecdoteForm)