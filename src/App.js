import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Error.js'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [type, setType] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = async (event) => {
    event.preventDefault()
    const blogObject = await blogService.create ({
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl,
    })
    setBlogs(blogs.concat(blogObject))
    setType('notification')
    setErrorMessage(`${newBlogTitle} by ${newBlogAuthor} was added`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    setNewBlogTitle('')
    setNewBlogAuthor('')
    setNewBlogUrl('')
    
  }

  const handleBlogTitleChange = (event) => {
    console.log(event.target.value)
    setNewBlogTitle(event.target.value)
  }
  const handleBlogAuthorChange = (event) => {
    console.log(event.target.value)
    setNewBlogAuthor(event.target.value)
  }
  const handleBlogUrlChange = (event) => {
    console.log(event.target.value)
    setNewBlogUrl(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try 
    {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } 
    catch (exception) {
      setType('error')
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
      <Notification message={errorMessage} type= {type}/>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <div>
      <Notification message={errorMessage} type= {type}/>
      title: <input value={newBlogTitle} onChange={handleBlogTitleChange}/> <br/>
      author: <input value={newBlogAuthor} onChange={handleBlogAuthorChange}/> <br/>
      url: <input value={newBlogUrl} onChange={handleBlogUrlChange}/> <br/>
      <button type="submit">create</button>
      </div>
    </form>  
  )

  return (
    <div>
      <h2>blogs</h2>
      {user === null ?
      loginForm() :
      <div>
        <p>{user.name} logged-in</p>
        <h2>blogs</h2>
          {blogForm()}
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
      </div>
    }

      {/* <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form> */}
    </div>
  )
}

export default App