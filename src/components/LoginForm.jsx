import React, {useRef} from 'react'

function LoginForm() {
  // const [username,setUsername] = useState("")
  // const [password,setPassword] = useState("")
  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   alert(`${username} your form is submitted.`)
  //   console.log(`${username} : ${password}`) }
  const usernameRef =useRef(null);
  const passwordRef =useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Username:",usernameRef.current.value)
    console.log(passwordRef.current.value)
    alert(`Hello ${usernameRef}`)
  }
  return (
    <div>
      {/* Controlled Form */}
      {/* <div className='container'>
        <form onSubmit={handleSubmit}>
          <lable>Username:
          <input type='text' placeholder='Enter your name' value={username} onChange={(e)=> setUsername(e.target.value)} required />
          </lable>
          <lable>Password:
          <input type='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          </lable>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div> */}

      {/* Uncontrolled Form */}
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>
            UserName:
            <input type='text' ref={usernameRef} required/>
          </label>
          <label>
            Password:
            <input type='password' ref={passwordRef} required/>
          </label>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm