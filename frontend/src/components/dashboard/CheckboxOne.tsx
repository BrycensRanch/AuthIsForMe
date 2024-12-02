import React, { useState } from 'react';

const CheckboxOne = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div>
			<label htmlFor="checkboxLabelOne" className="flex cursor-pointer select-none items-center">
				<div className="relative">
					<input
						type="checkbox"
						id="checkboxLabelOne"
						className="sr-only"
						onChange={() => {
							setIsChecked(!isChecked);
						}}
					/>
					<div
						className={`mr-4 flex size-5 items-center justify-center rounded border ${
							isChecked && 'bg-gray border-primary dark:bg-transparent'
						}`}
					>
						<span className={`size-2.5 rounded-sm ${isChecked && 'bg-primary'}`}></span>
					</div>
				</div>
				Checkbox Text
			</label>
		</div>
	);
};

export default CheckboxOne;
