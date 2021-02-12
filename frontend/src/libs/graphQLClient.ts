import { client } from '../graphql/client'
import { Writable, writable } from 'svelte/store'

const cache = new Map<string, unknown>()

export const query = <
  T extends keyof Pick<
    typeof client,
    ReturnType<typeof client[T]> extends Promise<{ __typename?: 'Query'; [k: string]: unknown }>
      ? keyof typeof client
      : never
  >,
  A extends Parameters<typeof client[T]>[0],
  P extends Parameters<typeof client[T]>[1]
>(
  queryName: T,
  arg?: A,
  headers?: P,
): Writable<ReturnType<typeof client[T]>> => {
  const store = writable(new Promise(() => ({})))

  if (cache.has(JSON.stringify({ queryName, ...arg }))) {
    store.set(Promise.resolve(cache.get(JSON.stringify({ queryName, ...arg }))))
  }

  const runQuery = async () => {
    const data = await client[queryName](arg as never, headers)
    cache.set(JSON.stringify({ queryName, ...arg }), data)
    store.set(Promise.resolve(data))
  }

  runQuery()
  return store as Writable<ReturnType<typeof client[T]>>
}

export const mutate = <
  T extends keyof Pick<
    typeof client,
    ReturnType<typeof client[T]> extends Promise<{ __typename?: 'Mutation'; [k: string]: unknown }>
      ? keyof typeof client
      : never
  >,
  A extends Parameters<typeof client[T]>[0],
  P extends Parameters<typeof client[T]>[1]
>(
  queryName: T,
  arg?: A,
  headers?: P,
): ReturnType<typeof client[T]> => {
  return client[queryName](arg as never, headers) as ReturnType<typeof client[T]>
}
