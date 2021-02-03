<script>
  import { fade } from 'svelte/transition'
  import { openToast } from '../../components/Toast.svelte'

  // table
  let purpose: 'firstMeeting' | 'getToKnow'

  // table
  const games = [
    {
      name: '「実は・・・」自己紹介',
      description: '「実は・・・」で始まるエピソードを盛り込んだ自己紹介をしてもらいます。',
      category: ['firstMeeting', 'getToKnow'],
      evaluation: 4,
      game_id: 1,
    },
    {
      name: 'ウソ、ホント？',
      description:
        '自分について4つの事実を箇条書きしてもらいます。ただし、そのうちの一つはウソ。どれが嘘か見抜けるでしょうか？',
      category: ['firstMeeting'],
      evaluation: 2,
      game_id: 2,
    },
    {
      name: '他己紹介',
      description:
        '参加者でペアを作り、お互いをインタビューします。その後、全員の前でインタビュー相手の紹介をします。今まで知らなかった相手のことを聴けるチャンス！',
      category: ['getToKnow'],
      evaluation: 3,
      game_id: 3,
    },
  ]

  const setPurpose = (input: typeof purpose) => (purpose = input)
  const handleEvaluation = (id: number, value: number) => openToast({ text: '評価して頂き、ありがとうございます！' })
</script>

<div class="l-container" in:fade="{{ duration: 200 }}">
  <h1>目的は？</h1>
  <sl-form class="input-validation-required">
    <div class="l-purpose-wrapper">
      <sl-button type="primary" on:click="{() => setPurpose('firstMeeting')}">初対面</sl-button>
      <sl-button type="success" on:click="{() => setPurpose('getToKnow')}">互いを知り合う</sl-button>
    </div>
  </sl-form>
</div>

<div class="l-cards-wrapper">
  {#if purpose === 'firstMeeting'}
    {#each games as { name, description, evaluation, game_id }}
      <sl-card class="card-header card-footer" in:fade="{{ duration: 200 }}">
        <div slot="header">{name}</div>
        {description}
        <div slot="footer">
          <sl-rating
            value="{evaluation}"
            on:sl-change="{// @ts-ignore
            (e) => handleEvaluation(game_id, e.target.value)}"></sl-rating>
          <sl-button slot="footer" type="primary">Start!</sl-button>
        </div>
      </sl-card>
    {/each}
  {:else if purpose === 'getToKnow'}
    {#each games as { name, description, evaluation, game_id }}
      <sl-card class="card-header card-footer" in:fade="{{ duration: 200 }}">
        <div slot="header">{name}</div>
        {description}
        <div slot="footer">
          <sl-rating
            value="{evaluation}"
            on:sl-change="{// @ts-ignore
            (e) => handleEvaluation(game_id, e.target.value)}"></sl-rating>
          <sl-button slot="footer" type="primary">Start!</sl-button>
        </div>
      </sl-card>
    {/each}
  {/if}
</div>

<style lang="scss">
  .l-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 60px 0;
  }
  .l-purpose-wrapper {
    max-width: 240px;
    margin-top: 20px;
  }
  .l-cards-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .card-header {
      max-width: 300px;
      margin: 5px 5px;

      & [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      & [slot='footer'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
