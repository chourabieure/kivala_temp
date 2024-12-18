'use client'

import React, { useMemo } from 'react'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { httpBatchLink } from '@trpc/client'
import superjson from 'superjson'
import { trpc } from './trpc'

const apiUrl = process.env.NEXT_PUBLIC_API_URL!

if (!apiUrl) {
  throw new Error('Missing NEXT_PUBLIC_API_URL')
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 24 * 60 * 60 * 1000, // 1 day
      staleTime: 60 * 1000, // 1 minute
    },
  },
})

export function TrpcContextProvider({ children }: { children: React.ReactNode }) {
  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        links: [
          httpBatchLink({
            url: apiUrl,
            transformer: superjson,
          }),
        ],
      }),
    [],
  )

  if (typeof window === 'undefined') {
    // If we're on the server, render without persistence
    return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </trpc.Provider>
    )
  }

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
    serialize: superjson.stringify,
    deserialize: superjson.parse,
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        {children}
      </PersistQueryClientProvider>
    </trpc.Provider>
  )
}
