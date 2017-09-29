const system = require('./jspm_packages/system')
const config = require('./config.js');
const process = require('process');

switch (process.argv[2]) {
    case 'build':
        require('./src/dist');
        break;
    default:
        require('./src/start');
}
