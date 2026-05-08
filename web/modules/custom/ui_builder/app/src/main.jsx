import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // 1. Architect Mode (Component Builder)
  const architectMount = document.getElementById('ui-builder-react-app');
  if (architectMount) {
    const layoutTreeInput = document.getElementById('ui-builder-layout-tree-input');
    const formSchemaInput = document.getElementById('ui-builder-form-schema-input');
    
    let initialLayout = [];
    let initialSchema = {};
    
    try {
      if (layoutTreeInput && layoutTreeInput.value) {
        initialLayout = JSON.parse(layoutTreeInput.value);
      }
      if (formSchemaInput && formSchemaInput.value) {
        initialSchema = JSON.parse(formSchemaInput.value);
      }
    } catch (e) {
      console.error("Failed to parse initial UI Builder JSON", e);
    }

    const handleUpdate = (newLayout, newSchema) => {
      if (layoutTreeInput) {
        layoutTreeInput.value = JSON.stringify(newLayout, null, 2);
      }
      if (formSchemaInput) {
        formSchemaInput.value = JSON.stringify(newSchema, null, 2);
      }
    };

    createRoot(architectMount).render(
      <StrictMode>
        <App 
          mode="architect"
          initialLayout={initialLayout} 
          initialSchema={initialSchema} 
          onUpdate={handleUpdate} 
        />
      </StrictMode>,
    )
  }

  // 2. Composer Mode (Page Composer on Node Edit pages)
  const composerMount = document.getElementById('ui-builder-composer-mount');
  if (composerMount) {
    const fieldId = composerMount.getAttribute('data-field-id');
    const dataInput = document.getElementById(fieldId);
    
    let initialLayout = [];
    try {
      if (dataInput && dataInput.value) {
        initialLayout = JSON.parse(dataInput.value);
      }
    } catch (e) {
      console.error("Failed to parse composer JSON", e);
    }

    const handleUpdate = (newLayout) => {
      if (dataInput) {
        dataInput.value = JSON.stringify(newLayout, null, 2);
      }
    };

    // Function to trigger Drupal form submission when saving from builder
    const handleSavePage = () => {
      if (dataInput) {
        // Find the parent Drupal form and submit it
        const drupalForm = dataInput.closest('form');
        if (drupalForm) {
          // Try to find and click the Drupal submit button first (preserves AJAX handlers)
          const submitBtn = drupalForm.querySelector('#edit-submit, [data-drupal-selector="edit-submit"], input[type="submit"][value="Save"]');
          if (submitBtn) {
            submitBtn.click();
          } else {
            // Fallback: direct form submission
            drupalForm.submit();
          }
        }
      }
    };

    const availableComponents = window.drupalSettings?.ui_builder?.composer?.available_components || [];

    createRoot(composerMount).render(
      <StrictMode>
        <App 
          mode="composer"
          initialLayout={initialLayout} 
          availableComponents={availableComponents}
          onUpdate={handleUpdate}
          onSavePage={handleSavePage}
        />
      </StrictMode>,
    )

  }
});
