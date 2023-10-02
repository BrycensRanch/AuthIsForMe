/* eslint-disable sonarjs/no-duplicate-string */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Medal from './Medal';
// eslint-disable-next-line import/no-extraneous-dependencies
jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: () => ({
		query: {},
		pathname: '/',
		asPath: '/',
		events: {
			emit: jest.fn(),
			on: jest.fn(),
			off: jest.fn(),
		},
		push: jest.fn(() => Promise.resolve(true)),
		prefetch: jest.fn(() => Promise.resolve(true)),
		replace: jest.fn(() => Promise.resolve(true)),
	}),
}));

afterEach(() => {
	// cleaning up the mess left behind the previous test
	jest.restoreAllMocks();
});

const title = 'Random title';
const body = 'Random description';

describe('Medal component', () => {
	describe('Render method', () => {
		it('medal should NOT render right away', async () => {
			render(<Medal initialValue={false} title={title} body={body} />);
			fireEvent.click(screen.getByTestId('medal-button1'));
			await waitFor(() => {
				const medalTitle = screen.getByTestId('medal-title');
				expect(medalTitle).toHaveTextContent(title);
			});
			// dismiss button
			fireEvent.click(screen.getByTestId('medal-button3'));
			// medal is gone
			// eslint-disable-next-line testing-library/prefer-presence-queries
			// expect(screen.getByText('Close')).not.toBeInTheDocument();
		});

		it('medal should render right away', async () => {
			render(<Medal initialValue={true} title={title} body={body} />);
			const medalTitle = screen.getByTestId('medal-title');
			expect(medalTitle).toHaveTextContent(title);

			// dismiss button
			fireEvent.click(screen.getByTestId('medal-button3'));
			// medal is gone
			// eslint-disable-next-line testing-library/prefer-presence-queries
			// expect(screen.getByText('Close')).not.toBeInTheDocument();
		});

		it('medal should render right away and close', async () => {
			render(<Medal initialValue={true} title={title} body={body} />);
			const medalTitle = screen.getByTestId('medal-title');
			expect(medalTitle).toHaveTextContent(title);

			// dismiss button
			fireEvent.click(screen.getByTestId('medal-button2'));
			// medal is gone
			// eslint-disable-next-line testing-library/prefer-presence-queries
			// expect(screen.getByText('Close')).not.toBeInTheDocument();
		});
	});
});
