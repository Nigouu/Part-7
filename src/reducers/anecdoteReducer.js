import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.id
        const anecdoteToChange = state.find(n => n.id === id)
        const changedAnecdote = { 
          ...anecdoteToChange, 
          votes: anecdoteToChange.votes + 1 
        }
        return state.map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote 
        )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

// export const initializeAnecdotes = (anecdotes) => {
//   return {
//     type: 'INIT_ANECDOTES',
//     data: anecdotes,
//   }
// }

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

// export const createAnecdote = (data) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data,
//   }
// }

export const createAnecdote = (content, id) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content, id)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const voteAnecdote = (id, newObject) => {
  return async dispatch => {
    const newVote = await anecdoteService.vote(id, newObject)
    dispatch({
      type: 'VOTE',
      id: id,
      data: newVote
    })
  }
}

export default anecdoteReducer