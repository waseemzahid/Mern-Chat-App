const GenderCheckbox = () => {
	return (
		// <div className='flex mt-4 mx-20'>
		// 	<div className='form-control'>
		// 		<label className={`label gap-2 cursor-pointer`}>
		// 			<span className='label-text text-white'>Male</span>
		// 			<input type='checkbox' className='checkbox border-green-900 checkbox-success' />
		// 		</label>
		// 	</div>
		// 	<div className='form-control pl-4'>
		// 		<label className={`label gap-2 cursor-pointer`}>
		// 			<span className='label-text text-white'>Female</span>
		// 			<input type='checkbox' className='checkbox border-green-900 checkbox-success' />
		// 		</label>
		// 	</div>
		// </div>
            <div className='flex mt-4 mx-20'>
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className='label-text text-white'>Male</span>
                        <input type='radio' name='gender' className='radio border-green-900 bg-white radio-success' />
                    </label>
                </div>
                <div className='form-control pl-4'>
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className='label-text text-white'>Female</span>
                        <input type='radio' name='gender' className='radio border-green-900 bg-white radio-success' />
                    </label>
                </div>
            </div>
	);
};
export default GenderCheckbox;