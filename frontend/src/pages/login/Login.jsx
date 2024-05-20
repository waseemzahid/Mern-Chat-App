import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-orange-600"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10 border-orange-600"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10 border-orange-600"
            />
          </div>

          <div>
            <button
              className="bg-orange-600 text-white h-10 btn-block mt-6 text-lg rounded-lg shadow-lg hover:bg-orange-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
          <p className="text-center mt-6 text-[17px] text-white">
            {"Don't"} have an account?{' '}
            <Link
              to={'/signup'}
              className="text-orange-600 font-bold inline-block hover:text-orange-500"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
