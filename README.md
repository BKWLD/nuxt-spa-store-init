# nuxt-spa-store-server-init

A simple Nuxt module that will hydrate the VueX store when running in SPA mode (not SSR).  It is based on [this comment](https://github.com/nuxt/nuxt.js/issues/240#issuecomment-326893386) and calls the root Vuex action `nuxtClientInit()` manually when [Nuxt's `mode`](https://nuxtjs.org/api/configuration-mode) is `spa`.

## Install

1. `yarn add nuxt-spa-store-server-init` or `npm install --save nuxt-spa-store-server-init`
2. Add to `nuxt.config.js` under modules: `modules: ['nuxt-spa-store-server-init']`

## Usage

Make sure your [`nuxtServerInit` action](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action) in `store/index.js` returns a Promise.  Other than that, it just works automatically.
