import { client } from '../graphql/client'
import { Writable, writable } from 'svelte/store'

const cache = new Map<{ query: keyof typeof client; [key: string]: unknown }, unknown>()

export default <T extends keyof typeof client, K extends Parameters<typeof client[T]>[0]>(
  query: T,
  arg?: K,
): Writable<ReturnType<typeof client[T]>> => {
  const store = writable(new Promise(() => ({})))

  if (cache.has({ query, ...arg })) {
    store.set(Promise.resolve(cache.get({ query, ...arg })))
  }

  const load = async () => {
    const data = arg ? await client[query](arg) : await client[query]()
    cache.set({ query, ...arg }, data)
    store.set(Promise.resolve(data))
  }

  load()
  return store as Writable<ReturnType<typeof client[T]>>
}
