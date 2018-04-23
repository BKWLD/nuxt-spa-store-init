/**
 * Register the no-ssr plugin that hydrates vuex
 */
const path = require('path')
module.exports = function (module) {
	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		ssr: false,
	});
}
