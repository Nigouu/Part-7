import { useDispatch } from 'react-redux'
// import store from '../store'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const id = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: id(),
        votes: 0
      }
    })
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

