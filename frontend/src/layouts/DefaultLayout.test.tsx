import { render, screen, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import DefaultLayout from './DefaultLayout';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
	'next/head',
	() =>
		// eslint-disable-next-line unicorn/consistent-function-scoping
		function Head(properties: { children: ReactNode }) {
			// eslint-disable-next-line testing-library/no-node-access
			return <>{properties.children}</>;
		},
);

describe('DashboardLayout component', () => {
	describe('Render method', () => {
		it('should have dashboard header', async () => {
			// eslint-disable-next-line react/no-children-prop
			render(<DefaultLayout children={undefined} />);

			await waitFor(() => {
				expect(screen.getByTestId('header')).toBeInTheDocument();
			});
		});
	});
});
