# nuxt-spa-store-init

A simple Nuxt module that will hydrate the VueX store when running in SPA mode, whether this is because you are running `yarn dev --spa` or you're using [the fallback option](https://nuxtjs.org/docs/configuration-glossary/configuration-generate/#fallback) of `yarn generate`.  It is based on [this comment](https://github.com/nuxt/nuxt.js/issues/240#issuecomment-326893386) as well as [this comment](https://github.com/nuxt/nuxt.js/issues/7051#issuecomment-604914461) and calls the root Vuex action `nuxtServerInit()` if it hasn't run yet.

## Install

1. `yarn add nuxt-spa-store-init` or `npm install --save nuxt-spa-store-init`
2. Add to `nuxt.config.js` under modules: `modules: ['nuxt-spa-store-init']`

## Usage

Ensure your [`nuxtServerInit` action](https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action) in `store/index.js` returns a Promise.  Other than that, it just works automatically.
