import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FrontendStyler from './components/FrontendStyler.jsx'
import './frontend.css'

document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.getElementById('ui-builder-frontend-styler-root');
  if (mountPoint) {
    createRoot(mountPoint).render(
      <StrictMode>
        <FrontendStyler />
      </StrictMode>
    );
  }
});
