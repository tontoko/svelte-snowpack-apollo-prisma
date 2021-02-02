<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
</script>

<Header page="Home" />
<Router routes="{routes}" />
<Footer />

<style>
  :global(body) {
    font-family: Roboto, sans-serif;
    margin: 0;
    background-color: var(--sl-color-black);
  }
</style>
