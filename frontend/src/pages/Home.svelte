<script>
  import Header from '../components/Header.svelte'
</script>

<Header page="Home" />
<main>
  <div class="l-screen1">
    <div class="l-screen1-band">
      <h1>
        意外な一面<br />
        知れるかも？
      </h1>
      <div class="l-screen1-icon-wrapper">
        <a href="#"><img src="images/slack.svg" alt="slack" /></a>
        <a href="#"><img src="images/teams.svg" alt="teams" /></a>
      </div>
      <button>アイスブレイクを始める</button>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
  }
  .l-screen1 {
    display: flex;
    background-image: url('images/ice-bg.jpg');
    height: 736px;
    width: 100%;
    align-items: center;
    &-band {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      height: 440px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      h1 {
        font-weight: var(--sl-font-weight-bold);
        font-size: var(--sl-font-size-xxxx-large);
        color: var(--sl-color-black);
        margin-top: 30px;
      }
    }
    &-icon-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
      width: 160px;
      img {
        width: 60px;
        aspect-ratio: 1;
      }
    }
    button {
      color: var(--sl-color-white);
      background-color: var(--sl-color-black);
      border: none;
      outline: none;
      border-radius: 50px;
      padding: 10px 30px;
      margin-top: 20px;
      cursor: pointer;
      font-weight: var(--sl-font-weight-bold);
    }
  }
</style>
