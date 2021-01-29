// Import the wrap method
import { wrap } from 'svelte-spa-router/wrap'

// Note that Author and Book are not imported here anymore, so they can be imported at runtime
import Home from './pages/Home.svelte'
// import NotFound from './pages/NotFound.svelte'

export const routes = {
  '/': Home,

  // Wrapping the Author component
  // '/author/:first/:last?': wrap({
  //     asyncComponent: () => import('./routes/Author.svelte')
  // }),

  // // Wrapping the Book component
  // '/book/*': wrap({
  //     asyncComponent: () => import('./routes/Book.svelte')
  // }),

  // Catch-all route last
  // '*': NotFound,
}
