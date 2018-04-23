/**
 * Return Promise from the nuxtServerInit Store
 */
module.exports = function({ store }) {
	return store.dispatch('nuxtServerInit');
}
