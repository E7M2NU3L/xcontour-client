import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import ViteReduxProvider from './providers/vite-redux-provider.tsx'
import ViteQueryProvider from './providers/vite-query-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ViteReduxProvider>
          <ViteQueryProvider>
            <div>
              <App />
            </div>
          </ViteQueryProvider>
        </ViteReduxProvider>
    </ThemeProvider>
  </StrictMode>,
)
