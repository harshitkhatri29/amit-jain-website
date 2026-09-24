import re
import os

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix <font> tags -> <span>
    content = content.replace('<font', '<span').replace('</font>', '</span>')
    
    # Fix style parsing for url()
    # It parsed it as style={{ backgroundImage: url("https...") }}
    # We need to quote the whole string: style={{ backgroundImage: "url('https...')" }}
    content = re.sub(r'backgroundImage:\s*(url\([^)]+\))', r'backgroundImage: "\1"', content)
    content = content.replace('"url("', '"url(\'').replace('")"', '\')"')
    
    # Fix boolean attributes: disabled="disabled", disabled="", checked=""
    # Next.js/React expects disabled={true} etc.
    for attr in ['disabled', 'checked', 'required', 'readOnly', 'autoFocus', 'multiple']:
        content = re.sub(rf'{attr}="[^"]*"', rf'{attr}', content)

    # tabindex string -> number
    content = re.sub(r'tabIndex={"([^"]+)"}', r'tabIndex={\1}', content)
    # wait, the earlier fix might have done tabIndex={-1} correctly if it was tabindex="-1"
    # let's fix tabIndex="-1" if it wasn't caught
    content = re.sub(r'tabIndex="(-?\d+)"', r'tabIndex={\1}', content)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
