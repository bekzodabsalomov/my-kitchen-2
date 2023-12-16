import Signup from "./Signup"


function Login() {
  return (
  <div className='forms mt-36'>
    <h2 className='text-center font-bold'>Login</h2>
    <form className='mt-8 text-center'>
      <label>
        <span className='span'>Email:</span>
        <input className='input' placeholder='Please enter your email' type="email" />
      </label>
      <label >
        <span className='span'>Password:</span>
        <input className='input' placeholder='Plaese enter your password' type="password" />
      </label>
      <button className=" md: ml-5 mb-2">Login</button>
    </form>
    <p className="text-center">If you don't have account , <a className='text-green-300' href="Signup">Signup</a>    here</p>
  </div>
  )
}

export default Login