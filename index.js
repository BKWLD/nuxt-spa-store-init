/**
 * Register a plugin that dispatches nuxtServerInit if it hasn't run.
 */
const path = require('path')
module.exports = function () {

	// Add the plugin last, after CMS adapters that may be called from store
	// actions, have been registered. `this.addPlugin` unshifts the plugin.
	this.options.plugins.push({
		src: path.resolve(__dirname, 'plugin.js'),
	})
}

// Export meta for Nuxt
module.exports.meta = require('./package.json')
