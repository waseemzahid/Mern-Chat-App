const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex mt-4 mx-20'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-white'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-green-900 checkbox-success'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text text-white'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-green-900 checkbox-success'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;