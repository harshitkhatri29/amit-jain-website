import re
import os

def fix_style_string(style_str):
    styles = {}
    for rule in style_str.split(';'):
        if not rule.strip(): continue
        parts = rule.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            val = parts[1].strip()
            # Convert kebab-case to camelCase
            key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
            val = val.replace('"', "'") # Use single quotes inside string
            styles[key] = val
    
    # Format to style={{ key: "val" }}
    props = ", ".join(f"{k}: \"{v}\"" for k, v in styles.items())
    return f"style={{{{ {props} }}}}"

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    def replace_style(match):
        return fix_style_string(match.group(1))

    content = re.sub(r'style="([^"]*)"', replace_style, content)
    
    # Also fix some common React warnings
    content = content.replace('<!--', '{/*').replace('-->', '*/}')
    # Fix ampersands if any raw ones exist (though in HTML they are usually &amp;)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
