<script>
  let inputField: HTMLInputElement
  const onInput = (event: KeyboardEvent) => {
    console.log(inputField.value)
    if (event.key !== 'Enter') return
    inputField.value = ''
    console.log(inputField.value)
  }
</script>

<div class="App">
  <sl-form class="form-overview">
    <sl-input
      name="inputField1"
      type="text"
      label="Type"
      placeholder="type and press Enter"
      bind:this="{inputField}"
      on:keydown="{onInput}"
    >
    </sl-input>
  </sl-form>
</div>

<style>
</style>
