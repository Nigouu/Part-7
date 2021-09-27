import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const id = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newId = id()
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content, newId)
    dispatch(createAnecdote(newAnecdote))
    dispatch({
      type: 'NOTIFICATION',
      content
    })
    setTimeout(() => {
      dispatch({type: 'HIDE_NOTIFICATION'})
    }, 2000)
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

export default AnecdoteForm












    // dispatch({
    //   type: 'NEW_ANECDOTE',
    //   data: {
    //     content,
    //     id: id(),
    //     votes: 0
    //   }
    // })