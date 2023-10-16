// TODO: Implement real stubbing of API responses

describe('Static pages', () => {
	it('should take screenshot of the homepage', () => {
		cy.visit('/');
		// Wait until the page is displayed
		cy.findByTestId('index-h1');

		cy.percySnapshot('Homepage');
	});
	it('should take screenshot of the thanks/libraries page', () => {
		cy.intercept('GET', 'https://api.github.com/users/*', {
			statusCode: 200,
			body: {
				name: 'cypress-testing-suite',
				email: 'cypress@peterpannetweorks.io',
				description: 'This is a intercepted cypress request - your request did NOT make it to github.',
			},
		});
		cy.intercept('GET', 'https://registry.npmjs.org/**', {
			statusCode: 200,
			body: {
				name: '@amog/us',
				description: 'Just another useless npm package (BLOAT)',
				license: 'MIT',
				repository: {
					type: 'git',
					url: 'git+https://github.com/tailwindlabs/heroicons.git',
				},
				author: {
					name: 'cypressed',
					email: 'cypress@peterpannetweorks.io',
				},
				homepage: 'https://cypress.io',
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
