// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const inputValue = event.target.value
    const error = inputValue !== inputValue.toLowerCase() // why is this a const if it can be changed?>
    setError(error ? 'Username must be lowercase' : null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'usernameInput'}>Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type={'submit'}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
