// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV !== 'production'
  ? (module.exports = {
      presets: ['next/babel'],
      plugins: ['istanbul'],
    })
  : (module.exports = {
      presets: ['next/babel'],
      plugins: [],
    });
