import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
	describe('Render method', () => {
		it('should have 2 menu items', () => {
			render(<Main meta={undefined}>{undefined}</Main>);

			const menuItemList = screen.getAllByRole('listitem');

			expect(menuItemList).toHaveLength(2);
		});
	});
});
