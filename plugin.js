/**
 * Return Promise from the nuxtServerInit Store
 */
module.exports = function(ctx) {
	if (process.static) return // Don't refetch, will be baked in
	return ctx.store.dispatch('nuxtServerInit', ctx);
}
