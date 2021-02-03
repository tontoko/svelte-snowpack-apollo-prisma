<script context="module">
  type ToastProps = {
    type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
    text: string
  }
  type Icon = 'info-circle' | 'check2-circle' | 'gear' | 'exclamation-triangle' | 'exclamation-octagon'
  let toastProps = writable({ text: '', icon: 'info-circle' })
  let toastRef: HTMLElement & { toast(): void; type: ToastProps['type'] }
  export const openToast = async ({ type = 'primary', text }: ToastProps) => {
    if (!toastRef) return
    let icon: Icon
    switch (type) {
      case 'primary':
        icon = 'info-circle'
        break
      case 'success':
        icon = 'check2-circle'
        break
      case 'info':
        icon = 'gear'
        break
      case 'warning':
        icon = 'exclamation-triangle'
        break
      case 'danger':
        icon = 'exclamation-octagon'
        break
    }
    toastProps.set({ text, icon })
    toastRef.type = type
    await tick()
    toastRef.toast()
  }
</script>

<script>
  import { tick } from 'svelte'

  import { writable } from 'svelte/store'
  let innerText = ''
  let icon = 'info-circle'
  toastProps.subscribe((v) => {
    innerText = v.text
    icon = v.icon
  })
</script>

<sl-alert type="primary" closable class="alert-closable" duration="3000" bind:this="{toastRef}">
  <sl-icon slot="icon" name="{icon}"></sl-icon>
  {innerText}
</sl-alert>

<style lang="scss">
  sl-alert {
    position: absolute;
    top: 0;
  }
</style>
