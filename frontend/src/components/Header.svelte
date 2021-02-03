<script>
  import { link, location } from 'svelte-spa-router'
  let page: 'Home' | 'Game'
  location.subscribe((path) => {
    if (path === '/') page = 'Home'
    page = 'Game'
  })
</script>

<header>
  <a href="/" use:link><img src="images/logo.svg" alt="logo" /></a>
</header>

<style>
  header {
    display: flex;
    position: sticky;
    top: 0;
    height: 64px;
    width: 100%;
    background-color: var(--sl-color-black);
    align-items: center;
    z-index: 100;
  }
  img {
    margin-left: 30px;
    height: 42px;
  }
</style>
