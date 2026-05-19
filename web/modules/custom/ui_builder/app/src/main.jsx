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

  // 3. Style Mode (Custom Style editor)
  const styleMount = document.getElementById('ui-builder-style-mount');
  if (styleMount) {
    const dataInput = document.getElementById('ui-builder-style-data-input');
    const labelInput = document.getElementById('edit-label');
    const idInput = document.getElementById('edit-id');
    
    let styleData = null;
    try {
      if (dataInput && dataInput.value) {
        styleData = JSON.parse(dataInput.value);
      }
    } catch (e) {
      console.error("Failed to parse style JSON", e);
    }
    
    // Fallback if data is empty or invalid
    if (!styleData || typeof styleData !== 'object' || Array.isArray(styleData)) {
      styleData = {
        selector: '&',
        properties: {},
        custom_properties: {},
        children: []
      };
    }
    
    const styleObj = {
      id: idInput ? idInput.value : '',
      label: labelInput ? labelInput.value : '',
      data: styleData
    };
    
    const handleSave = (updatedStyle) => {
      if (dataInput) {
        dataInput.value = JSON.stringify(updatedStyle.data, null, 2);
      }
      if (labelInput) {
        labelInput.value = updatedStyle.label;
      }
      // Submit the parent form
      const form = dataInput.closest('form');
      if (form) {
        const submitBtn = form.querySelector('#edit-submit, [data-drupal-selector="edit-submit"]');
        if (submitBtn) {
          submitBtn.click();
        } else {
          form.submit();
        }
      }
    };

    const handleBack = () => {
      window.location.href = '/admin/ui-builder/styles';
    };
    
    // Hide Drupal form fields that the React app replaces (label, machine_name, data textarea, submit)
    // Walk up to the form and hide sibling form elements, keeping the mount wrapper visible
    const drupalForm = styleMount.closest('form');
    if (drupalForm) {
      // Hide all .form-item, .js-form-item, and .form-actions direct children
      // BUT keep the wrapper that contains our mount point
      Array.from(drupalForm.children).forEach(child => {
        // Skip if this element contains our mount point
        if (child.contains(styleMount)) return;
        // Hide form items and form actions
        if (
          child.classList.contains('form-item') ||
          child.classList.contains('js-form-item') ||
          child.classList.contains('form-actions') ||
          child.classList.contains('js-form-wrapper') ||
          child.classList.contains('form-wrapper')
        ) {
          child.style.display = 'none';
        }
      });
    }

    createRoot(styleMount).render(
      <StrictMode>
        <App 
          mode="style"
          initialStyle={styleObj}
          onSaveStyle={handleSave}
          onBackStyle={handleBack}
        />
      </StrictMode>
    );
  }
});

