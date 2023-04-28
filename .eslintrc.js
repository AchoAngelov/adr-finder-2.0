module.exports = {
  parser: 'babel-eslint',
  plugins: ['import', 'react'],
  rules: {
    'react/prop-types': 'error',
    'react/no-unknown-property': 'error',
    'import/no-duplicates': 'error',
  },
}
