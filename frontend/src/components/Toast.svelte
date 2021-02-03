<script context="module">
  type ToastProps = {
    type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
    text: string
  }
  let toastText = writable('')
  let toastRef: HTMLElement & { toast(): void; type: ToastProps['type'] }
  export const openToast = async ({ type = 'primary', text }: ToastProps) => {
    if (!toastRef) return
    toastText.set(text)
    toastRef.type = type
    toastRef.toast()
  }
</script>

<script>
  import { writable } from 'svelte/store'
  let innerText = ''
  toastText.subscribe((v) => (innerText = v))
</script>

<sl-alert type="primary" closable class="alert-closable" duration="3000" bind:this="{toastRef}">
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  {innerText}
</sl-alert>

<style lang="scss">
  sl-alert {
    position: absolute;
    top: 0;
  }
</style>
