const browserslist = require('browserslist')
const config = require('../index')

// eslint-disable-next-line no-console
console.log(browserslist(config).join('\n'))
