import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const PreviewModal = ({ nodes, onClose }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const response = await fetch('/api/ui-builder/preview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nodes),
        });

        if (!response.ok) {
          throw new Error('Failed to generate preview');
        }

        const data = await response.json();
        setHtml(data.html);
        setCss(data.css);
      } catch (err) {
        console.error('Preview error:', err);
        setError('Error loading preview. Check console for details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPreview();
  }, [nodes]);

  return (
    <div className="uib-preview-modal fixed inset-0 z-[9999] bg-white flex flex-col h-screen w-screen overflow-hidden">

      <div className="flex items-center justify-between p-4 border-b bg-gray-50 flex-shrink-0">
        <div>
          <h2 className="text-lg font-semibold flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            Live Preview (Drupal Backend Rendered)
          </h2>
          <p className="text-sm text-gray-500">This matches exactly what the frontend will output.</p>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition-colors"
        >
          Close Preview
        </button>
      </div>

      <div className="flex-1 overflow-auto bg-white p-4">
        {loading && (
          <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="w-8 h-8 animate-spin mb-4" />
            <p>Generating perfect preview...</p>
          </div>
        )}

        {error && (
          <div className="h-full w-full flex items-center justify-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <iframe
            className="w-full h-full border-0"
            title="UI Builder Preview"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>${css}</style>
                  <style>
                    body { margin: 0; padding: 0; background: #fff; font-family: sans-serif; }
                  </style>
                  <script>
                    window.Drupal = { behaviors: {} };
                    window.once = function(id, selector, context) {
                      var ctx = context || document;
                      var elements = ctx.querySelectorAll(selector);
                      var result = [];
                      elements.forEach(function(el) {
                        if (!el.hasAttribute('data-once-' + id)) {
                          el.setAttribute('data-once-' + id, 'true');
                          result.push(el);
                        }
                      });
                      return result;
                    };
                    document.addEventListener('DOMContentLoaded', function() {
                      for (var key in Drupal.behaviors) {
                        if (typeof Drupal.behaviors[key].attach === 'function') {
                          try {
                            Drupal.behaviors[key].attach(document, {});
                          } catch (e) {
                            console.error('Error attaching behavior ' + key, e);
                          }
                        }
                      }
                    });
                  </script>
                </head>
                <body>
                  ${html}
                </body>
              </html>
            `}
          />
        )}
      </div>
    </div>
  );
};

export default PreviewModal;
