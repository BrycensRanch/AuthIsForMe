// Please delete this file when swc istanbul releases.
// I don't like Babel. I don't like it at all.
// Makes our app look older than it is.

// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'production'
	? (module.exports = {
			presets: ['next/babel'],
			plugins: [],
	  })
	: (module.exports = {
			presets: ['next/babel'],
			plugins: ['istanbul'],
	  });
