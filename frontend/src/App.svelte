<script>
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
</script>

<Router routes="{routes}" />

<style>
  :global(body) {
    font-family: Roboto, sans-serif;
    margin: 0;
  }
</style>
