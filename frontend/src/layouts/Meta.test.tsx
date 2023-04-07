import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

import { Meta } from './Meta';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
	'next/head',
	() =>
		// eslint-disable-next-line unicorn/consistent-function-scoping
		(function Head(properties: { children: ReactNode }) {
			// eslint-disable-next-line testing-library/no-node-access
			return <>{properties.children}</>;
		}),
);

describe('Meta component', () => {
	describe('Render method', () => {
		it('should a page title', async () => {
			const title = 'Random title';

			render(<Meta title={title} description="Random description" />);

			await waitFor(() => {
				expect(document.title).toEqual(title);
			});
		});
	});
});
