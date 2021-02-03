<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Toast from './components/Toast.svelte'
</script>

<Header />
<main>
  <Toast />
  <Router routes="{routes}" />
</main>
<Footer />

<style>
  :global(body) {
    font-family: Roboto, sans-serif;
    margin: 0;
    background-color: var(--sl-color-gray-200);
  }
  main {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 128px);
  }
</style>
