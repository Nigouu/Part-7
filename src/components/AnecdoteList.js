import React, {useState} from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

var timeoutID
const AnecdoteList = (props) => {

    const [count, setCount] = useState(0)

    const vote = (id, anecdote) => {
        console.log('vote', id)
        const newObject = anecdote
        props.voteAnecdote(id, newObject)
        if (count === 0) {
            clearTimeout(timeoutID)
            props.setNotification(`you voted '${anecdote.content}'`, 5, count)
            setCount(1)
            timeoutID = setTimeout(() => {
                setCount(0)
              }, 5000)
          } else {
            clearTimeout(timeoutID)
            props.setNotification(`you voted '${anecdote.content}'`, 5, count)
            setCount(1)
            timeoutID = setTimeout(() => {
                setCount(0)
              }, 5000)
          }
      }

    const sort = () => {
        props.anecdotes.sort(function (a, b) {
        return b.votes - a.votes
        })
    }

    return(
        <div>
            {sort(props.anecdotes)}
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

  const mapDispatchToProps = {
    voteAnecdote,
    setNotification
  }

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
    )(AnecdoteList)

export default ConnectedAnecdotes