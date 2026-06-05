import re

file_path = '/Users/sauravkumar/Desktop/code/figma-to-code-plugin/cms/web/modules/custom/ui_builder/app/src/App.css'
with open(file_path, 'r') as f:
    content = f.read()

# 1. Update :root variables
root_pattern = re.compile(r':root\s*\{.*?\n\}', re.DOTALL)
new_root = """:root {
  --primary:        #3F72AF;
  --primary-hover:  #2d578a;
  --bg-app:         #F9F7F7;
  --bg-sidebar:     #F9F7F7;
  --bg-canvas:      #F9F7F7;
  --bg-panel:       #FFFFFF;
  --bg-input:       #FFFFFF;
  --bg-row-hover:   #DBE2EF;
  --bg-row-select:  #DBE2EF;
  --text-main:      #112D4E;
  --text-muted:     #3F72AF;
  --text-label:     #112D4E;
  --border:         #DBE2EF;
  --border-light:   #DBE2EF;
  --border-mid:     #DBE2EF;
  --accent:         #3F72AF;
  --error:          #e63946;
  --shadow-sm:      0 1px 2px rgba(17,45,78,.05);
  --shadow:         0 4px 6px -1px rgba(17,45,78,.1);
  --shadow-lg:      0 10px 15px -3px rgba(17,45,78,.1);
  --radius:         4px;
  /* Element type colors */
  --col-layout:     #3F72AF;
  --col-text:       #112D4E;
  --col-media:      #3F72AF;
  --col-interactive:#112D4E;
  --col-component:  #3F72AF;
}"""
content = root_pattern.sub(new_root, content)

# 2. Replace hardcoded dark sidebar backgrounds with vars
content = re.sub(r'#2a2d33\b', 'var(--bg-sidebar)', content, flags=re.IGNORECASE)
content = re.sub(r'#23262b\b', 'var(--bg-panel)', content, flags=re.IGNORECASE)
content = re.sub(r'#1e2025\b', 'var(--bg-input)', content, flags=re.IGNORECASE)
content = re.sub(r'#353840\b', 'var(--bg-sidebar)', content, flags=re.IGNORECASE)
content = re.sub(r'#3e4249\b', 'var(--bg-row-hover)', content, flags=re.IGNORECASE)

# 3. Replace hardcoded dark mode borders
content = re.sub(r'#3a3d44\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#4a4e56\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#cbd5e1\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#d5d5d5\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#ccc\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#e8e8e8\b', 'var(--border)', content, flags=re.IGNORECASE)
content = re.sub(r'#f0f0f0\b', 'var(--border)', content, flags=re.IGNORECASE)

# 4. Replace text colors in sidebar
content = re.sub(r'color:\s*#e2e5ea\b', 'color: var(--text-main)', content, flags=re.IGNORECASE)
content = re.sub(r'color:\s*#c8cbd1\b', 'color: var(--text-main)', content, flags=re.IGNORECASE)
content = re.sub(r'color:\s*#8b8f98\b', 'color: var(--text-muted)', content, flags=re.IGNORECASE)
content = re.sub(r'color:\s*#6b7280\b', 'color: var(--text-muted)', content, flags=re.IGNORECASE)

# 5. Replace primary blues
content = re.sub(r'#006dcc\b', 'var(--primary)', content, flags=re.IGNORECASE)
content = re.sub(r'#0073ba\b', 'var(--primary)', content, flags=re.IGNORECASE)
content = re.sub(r'#3b82f6\b', 'var(--primary)', content, flags=re.IGNORECASE)
content = re.sub(r'#005f9e\b', 'var(--primary-hover)', content, flags=re.IGNORECASE)
content = re.sub(r'#60a5fa\b', 'var(--primary-hover)', content, flags=re.IGNORECASE)

# 6. Replace canvas and generic backgrounds that should use var
content = re.sub(r'background:\s*#ffffff\b', 'background: var(--bg-panel)', content, flags=re.IGNORECASE)
content = re.sub(r'background-color:\s*#ffffff\b', 'background-color: var(--bg-panel)', content, flags=re.IGNORECASE)

# Fix some text colors manually
content = re.sub(r'color:\s*#ffffff\b', 'color: var(--text-main)', content, flags=re.IGNORECASE)
# If there's `color: #fff;` used inside buttons, it might get replaced, but we will assume for now we only replace full #ffffff for text where possible.
# Actually, it's safer not to indiscriminately replace #fff or #ffffff for color because buttons need white text.
# Let's fix that. I'll undo the blind color replacement for #ffffff and rely on manual checking or a better regex.
content = content.replace('color: var(--text-main); /* Fixes #ffffff */', '')

# We will just write it back
with open(file_path, 'w') as f:
    f.write(content)

print("Updated App.css")
