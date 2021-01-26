const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const presetEnv = require('postcss-preset-env');
const purgecss = require("@fullhuman/postcss-purgecss")
const postcssImport = require("postcss-import")
const PurgeSvelte = require("purgecss-from-svelte")

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(), 
    purgecss({
      content: [
        // "./pages/**/*.{js,jsx,ts,tsx}",
        // "./components/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.svelte"
      ],
      extractors: [
        {
          extractor: PurgeSvelte.extract,
          extensions: ["svelte"]
        }
      ]
    }),
    presetEnv(),
    cssnano({
      preset: "default",
    }),
  ],
}