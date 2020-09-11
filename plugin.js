/**
 * Return Promise from the nuxtServerInit Store
 */
module.exports = function(ctx) {
	return ctx.store.dispatch('nuxtServerInit', ctx);
}
