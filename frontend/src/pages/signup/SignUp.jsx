import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName:"",
		username:"",
		password:"",
		confirmPassword:"",
		gender:"",
	})
	const {loading, signup} = useSignup();
	const handleGenderChange = (gender) => {
		setInputs({...inputs, gender})
	}
	const handleSubmit = async(e) => {
		e.preventDefault();
		await signup(inputs)
	}
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>
				Sign Up
				<span className='text-green-700'> ChatApp</span>
			</h1>

			<form onSubmit={handleSubmit}>
                <div>
					<label className='label p-2'>
						<span className='text-base label-text text-white'>Full Name</span>
					</label>
					<input type='text' placeholder='Enter full name' value={inputs.fullName} 
					onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
					className='w-full input input-bordered h-10 border-green-800' />
				</div>
				<div>
					<label className='label p-2'>
						<span className='text-base label-text text-white'>Username</span>
					</label>
					<input type='text' placeholder='Enter username' value={inputs.username} 
					onChange={(e) => setInputs({...inputs, username: e.target.value})}
					className='w-full input input-bordered h-10 border-green-800' />
				</div>

				<div>
					<label className='label'>
						<span className='text-base label-text text-white'>Password</span>
					</label>
					<input
						type='password'
						placeholder='Enter Password' value={inputs.password}
						onChange={(e) => setInputs({...inputs, password: e.target.value})}
						className='w-full input input-bordered h-10 border-green-800'
					/>
				</div>

                <div>
					<label className='label'>
						<span className='text-base label-text text-white'>Confirm Password</span>
					</label>
					<input
						type='password'
						placeholder='Confirm Password' value={inputs.confirmPassword}
						onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
						className='w-full input input-bordered h-10 border-green-800'
					/>
				</div>
                <GenderCheckbox onCheckboxChange={handleGenderChange} selectedGender = {inputs.gender} />
				<div>
                    <button className='bg-green-600 text-white h-10 btn-block mt-6 text-lg rounded-lg shadow-lg hover:bg-green-700' disabled={loading}>
						{loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}</button>
                </div>
                <p className='text-center mt-6 text-[17px] text-white'>Already have an account?{" "}
                    <Link to={'/login'} className='text-green-700 font-semibold inline-block hover:text-green-600'>Login</Link>
                </p>
			</form>
		</div>
	</div>
  )
}

export default SignUp