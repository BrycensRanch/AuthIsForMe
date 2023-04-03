// TODO: Implement real stubbing of API responses

describe('Static pages', () => {
	it('should take screenshot of the homepage', () => {
		cy.visit('/');
		// Wait until the page is displayed
		cy.findByTestId('index-h1');

		cy.percySnapshot('Homepage');
	});
	it('should take screenshot of the thanks/libraries page', () => {
		cy.intercept('GET', 'https://api.github.com/*', {
			statusCode: 404,
			body: {
				name: 'Peter Pan',
			},
		});
		cy.intercept('GET', 'https://registry.npmjs.org*', {
			statusCode: 404,
			body: {
				name: 'Peter Pan',
			},
		});
		// spying and response stubbing
		cy.visit('/thanks');
		// Wait until the page is displayed
		cy.findByTestId('thanks-h1');

		cy.get('#licenses-loading', { timeout: 20_000 }).should('not.exist');
		cy.scrollTo('bottom');

		cy.percySnapshot('Thanks page');
	});
});
