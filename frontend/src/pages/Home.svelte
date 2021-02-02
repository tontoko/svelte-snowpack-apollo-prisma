<script>
</script>

<main>
  <div class="l-screen1">
    <div class="l-screen1-band">
      <h1>
        意外な一面<br />
        見つかるかも？
      </h1>
      <div class="l-screen1-icon-wrapper">
        <a href="#"><img src="images/slack.svg" alt="slack" /></a>
        <a href="#"><img src="images/teams.svg" alt="teams" /></a>
      </div>
      <button>アイスブレイクを始める</button>
    </div>
  </div>
  <div class="l-screen2">
    <p class="font-large">
      コロナ禍においてリモートワークが普及し、<br />
      ますますメンバー同士のコミュニケーションが重要視されています。
    </p>
    <p class="font-x-large">
      メンバーと気軽に話せる関係性、<br />
      築けていますか？
    </p>
    <p class="font-large">
      アイスブレイクゲームを行って、メンバーのことを<br />
      もっとよく知りましょう。<br />
      まずは雑談から。<br />
      気軽に相談できる関係性を築きませんか。
    </p>
  </div>
  <div class="l-screen3">
    <div class="l-screen3-cover">
      <div class="l-screen3-icon-wrapper">
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
    flex-direction: column;
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
  .l-screen1 {
    display: flex;
    background-image: url('images/ice-bg.jpg');
    background-position: center;
    background-size: cover;
    height: 664px;
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
        margin-top: 24px;
        letter-spacing: 30px;
        line-height: 120px;
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
  }
  .l-screen2 {
    display: flex;
    flex-direction: column;
    padding: 90px 60px;
    justify-content: space-between;
    background-color: var(--sl-color-gray-600);
    height: 600px;
    width: 100%;
    p {
      font-weight: var(--sl-font-weight-bold);
      color: var(--sl-color-gray-100);
    }
    .font-large {
      font-size: var(--sl-font-size-x-large);
      letter-spacing: 5px;
      line-height: 40px;
    }
    .font-x-large {
      font-size: var(--sl-font-size-xx-large);
      letter-spacing: 10px;
      line-height: 50px;
      margin-left: 30px;
    }
  }
  .l-screen3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('images/team-bg.jpg');
    background-position: center;
    background-size: cover;
    height: 600px;
    width: 100%;
    &-cover {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.7);
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
  }
</style>
