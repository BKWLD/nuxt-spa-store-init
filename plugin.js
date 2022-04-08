/**
 * Returns a Promise from the nuxtServerInit Store
 */
module.exports = function(ctx) {
	const { store } = ctx

	// If no store (like if this was added to a project that hasn't added files
	// to the store directory yet), abort
	if (!store) return

	// Create a module to track whether nuxtServerInit has been run
	store.registerModule('nuxtSpaStoreInit', {
		namespaced: true,
		state: () => ({ initted: false }),
		mutations: {
			initted(state) { state.initted = true },
		},
	})

	// Watch for nuxtServerInit to be called and update the initted state
	store.subscribeAction(({ type }) => {
		if (type == 'nuxtServerInit') {
			store.commit('nuxtSpaStoreInit/initted')
		}
	})

	// If we haven't observed nuxtServerInit has having run, execute it and
	// return it's promise.
	if (!store.state.nuxtSpaStoreInit.initted) {
		return store.dispatch('nuxtServerInit', ctx)
	}

}
