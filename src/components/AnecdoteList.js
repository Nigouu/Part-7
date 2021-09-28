import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const dispatch = useDispatch()

    const vote = (id, anecdote) => {
        console.log('vote', id)
        const newObject = anecdote
        dispatch(voteAnecdote(id, newObject))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
      }

    // const anecdotes = useSelector(({filter, anecdotes}) => {
    //     if ( filter === '' ) {
    //         return anecdotes
    //       }
    //     return filter  !== '' 
    //         ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    //         : anecdotes
    // })

    // const anecdotes = () => {
    //     if ( props.filter === '' ) {
    //         return props.anecdotes
    //     }

    //     return props.filter  !== '' 
    //         ? props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
    //         : props.anecdotes
    // }

    // const sort = () => {
    //     props.anecdotes.sort(function (a, b) {
    //     return b.votes - a.votes
    //     })
    // }

    return(
        <div>
            {/* {sort(props.anecdotes)} */}
            {props.anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     if ( state.filter === '' ) {
//         return state.anecdotes
//     }
//     return  state.filter  !== '' 
//         ? state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1)
//         : state.anecdotes
// }

// const mapDispatchToProps = {
//     voteAnecdote,
//     setNotification
//   }
  
// const ConnectedAnecdotes = connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(AnecdoteList)

const mapStateToProps = (state) => {
    if ( state.filter === '' ) {
        return {anecdotes: state.anecdotes}
    }
    return {
        anecdotes: state.filter  !== '' 
            ? state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(state.filter.toLowerCase()) !== -1)
            : state.anecdotes
    }
  }

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdotes

// export default AnecdoteList