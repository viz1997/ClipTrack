import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from './ThemeContext'
import ErrorBoundary from './ErrorBoundary'
import i18n from './i18n'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </I18nextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}

