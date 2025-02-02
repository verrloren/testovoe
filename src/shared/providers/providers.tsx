
import { getQueryClient } from '@/shared/api/get-query-clients'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type * as React from 'react'
import { ThemeProvider } from './theme-provider'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
			<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      	{children}
				<Toaster position="bottom-right" />
      <ReactQueryDevtools />
			</ThemeProvider>
			</BrowserRouter>
    </QueryClientProvider>
  )
}
