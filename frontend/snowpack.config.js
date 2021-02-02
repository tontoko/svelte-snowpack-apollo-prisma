/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: { url: '/',  static: true },
    src: '/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    "@snowpack/plugin-sass",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
    // "source": "remote",
    // "types": true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // alias: {
  //   "components": "./src/components",
  //   "pages": "./src/pages",
  //   "src": "./src*"
  // }
};
