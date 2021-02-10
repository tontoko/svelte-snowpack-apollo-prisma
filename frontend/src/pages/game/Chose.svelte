<script>
  import { mutate, query } from '../../libs/graphQLClient'
  import { fade } from 'svelte/transition'
  import { openToast } from '../../components/Toast.svelte'
  const gamesForFirstMeeting = query('AllGameQuery', { categoryName: 'firstMeeting' })
  const gamesForGetToKnow = query('AllGameQuery', { categoryName: 'getToKnow' })
  let categories: 'firstMeeting' | 'getToKnow'

  const setPurpose = (input: typeof categories) => (categories = input)
  const handleEvaluation = async (id: number, value: number) => {
    await mutate('Evalute', { id, value })
    openToast({ text: '評価して頂き、ありがとうございます！' })
  }
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
  {#if categories === 'firstMeeting'}
    {#await $gamesForFirstMeeting}
      <p>waiting...</p>
    {:then { games }}
      {#each games as { name, description, id }}
        <sl-card class="card-header card-footer" in:fade="{{ duration: 200 }}">
          <div slot="header">{name}</div>
          {description}
          <div slot="footer">
            <sl-rating
              on:sl-change="{// @ts-ignore
              (e) => handleEvaluation(id, e.target.value)}"></sl-rating>
            <sl-button slot="footer" type="primary">Start!</sl-button>
          </div>
        </sl-card>
      {/each}
    {/await}
  {:else if categories === 'getToKnow'}
    {#await $gamesForGetToKnow}
      <p>waiting...</p>
    {:then { games }}
      {#each games as { name, description, id }}
        <sl-card class="card-header card-footer" in:fade="{{ duration: 200 }}">
          <div slot="header">{name}</div>
          {description}
          <div slot="footer">
            <sl-rating
              on:sl-change="{// @ts-ignore
              (e) => handleEvaluation(id, e.target.value)}"></sl-rating>
            <sl-button slot="footer" type="primary">Start!</sl-button>
          </div>
        </sl-card>
      {/each}
    {/await}
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
