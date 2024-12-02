// eslint-disable-next-line unicorn/no-anonymous-default-export
const useBabelRC = require('@cypress/code-coverage/use-babelrc');

module.exports = (on, config) => {
	// Used to instrument code ran like unit tests
	on('file:preprocessor', useBabelRC);
};
