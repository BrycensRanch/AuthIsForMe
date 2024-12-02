import React, { useState } from 'react';

const CheckboxFive = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div>
			<label htmlFor="checkboxLabelFive" className="flex cursor-pointer select-none items-center">
				<div className="relative">
					<input
						type="checkbox"
						id="checkboxLabelFive"
						className="sr-only"
						onChange={() => {
							setIsChecked(!isChecked);
						}}
					/>
					<div
						className={`box mr-4 flex size-5 items-center justify-center rounded-full border border-primary ${
							isChecked && '!border-4'
						}`}
					>
						<span className="size-2.5 rounded-full bg-white dark:bg-transparent"></span>
					</div>
				</div>
				Checkbox Text
			</label>
		</div>
	);
};

export default CheckboxFive;
