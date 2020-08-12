import React, { useState } from 'react'
import { AUTH_TOKEN } from '../constants'


const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleConfirmation = () => {
    console.log("hello");
  }

  const saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  return (
    <div>
      <h4 className="mv3">{login ? 'Login' : 'Signup'}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        )}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => handleConfirmation()}>
          {login ? 'login' : 'create account'}
        </div>
        <div className="pointer button" onClick={() => setLogin(!login)}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  )

}


export default Login