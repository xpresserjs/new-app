// Import Xpresser
const {init} = require('xpresser');
// Import Configuration
const config = require('./config');

// Initialize
const $ = init(config)

// Boot
$.boot();

// Export DollarSign
module.exports = $;