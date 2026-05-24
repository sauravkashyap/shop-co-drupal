<?php
$file = '/Users/sauravkumar/Desktop/code/figma-to-code-plugin/cms/web/modules/custom/ui_builder/app/src/components/PropertiesPanel.jsx';
$content = file_get_contents($file);

$search = <<<EOD
                              {fieldSchema.type === 'image' ? (
                                <ImageEditor
                                  mode={entry.mode}
                                  value={entry.value}
                                  onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                />
EOD;

$replace = <<<EOD
                              {fieldSchema.type === 'image' ? (
                                <>
                                  <ImageEditor
                                    mode={entry.mode}
                                    value={entry.value}
                                    onUpdate={(val, m) => updateInstanceValue(selectedNode.id, key, val, m)}
                                  />
                                  <div className="form-group" style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
                                    <input 
                                      type="checkbox" 
                                      id={`bg-toggle-\${key}`}
                                      checked={entry.isBgImage || false}
                                      onChange={(e) => {
                                        updateInstanceValue(selectedNode.id, key, entry.value, entry.mode, { isBgImage: e.target.checked });
                                      }}
                                      style={{ marginRight: '8px', cursor: 'pointer' }}
                                    />
                                    <label htmlFor={`bg-toggle-\${key}`} style={{ marginBottom: 0, cursor: 'pointer' }}>Use as Background Image</label>
                                  </div>
                                </>
EOD;

$content = str_replace($search, $replace, $content);
file_put_contents($file, $content);
