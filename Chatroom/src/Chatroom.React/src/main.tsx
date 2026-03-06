import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={webDarkTheme}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </FluentProvider>    
  </StrictMode>,
)
