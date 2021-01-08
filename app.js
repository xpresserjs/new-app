// Import Xpresser
const {init} = require("xpresser");
// Import Configuration
const config = require('./config');

// Initialize & Boot Xpresser
init(config, {exposeDollarSign: false}).boot();
