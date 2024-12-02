import React, { useState } from 'react';

const CheckboxFour = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div>
			<label htmlFor="checkboxLabelFour" className="flex cursor-pointer select-none items-center">
				<div className="relative">
					<input
						type="checkbox"
						id="checkboxLabelFour"
						className="sr-only"
						onChange={() => {
							setIsChecked(!isChecked);
						}}
					/>
					<div
						className={`mr-4 flex size-5 items-center justify-center rounded-full border ${
							isChecked && 'border-primary'
						}`}
					>
						<span className={`size-2.5 rounded-full bg-transparent ${isChecked && '!bg-primary'}`}> </span>
					</div>
				</div>
				Checkbox Text
			</label>
		</div>
	);
};

export default CheckboxFour;
