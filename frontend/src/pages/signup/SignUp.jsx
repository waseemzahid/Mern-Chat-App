import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>
				Sign Up
				<span className='text-green-700'> ChatApp</span>
			</h1>

			<form>
                <div>
					<label className='label p-2'>
						<span className='text-base label-text text-white'>Full Name</span>
					</label>
					<input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10 border-green-800' />
				</div>
				<div>
					<label className='label p-2'>
						<span className='text-base label-text text-white'>Username</span>
					</label>
					<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 border-green-800' />
				</div>

				<div>
					<label className='label'>
						<span className='text-base label-text text-white'>Password</span>
					</label>
					<input
						type='password'
						placeholder='Enter Password'
						className='w-full input input-bordered h-10 border-green-800'
					/>
				</div>

                <div>
					<label className='label'>
						<span className='text-base label-text text-white'>Confirm Password</span>
					</label>
					<input
						type='password'
						placeholder='Confirm Password'
						className='w-full input input-bordered h-10 border-green-800'
					/>
				</div>
                <GenderCheckbox />
				<div>
                    <button className='bg-green-600 text-white h-10 btn-block mt-6 text-lg rounded-lg shadow-lg hover:bg-green-700'>Sign Up</button>
                </div>
                <p className='text-center mt-6 text-[17px] text-white'>Already have an account?{" "}
                    <a href='#' className='text-green-700 font-semibold inline-block hover:text-green-600'>Login</a>
                </p>
			</form>
		</div>
	</div>
  )
}

export default SignUp