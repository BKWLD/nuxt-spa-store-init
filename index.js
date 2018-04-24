/**
 * Register the no-ssr plugin that hydrates vuex
 */
const path = require('path')
module.exports = function () {
	if (this.options.mode == 'spa') {
		this.addPlugin({
			src: path.resolve(__dirname, 'plugin.js'),
			ssr: false,
		});
	}
}

// Export meta for Nuxt
module.exports.meta = require('./package.json')
