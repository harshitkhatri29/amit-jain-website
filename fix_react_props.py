import re
import os

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # onsubmit -> onSubmit
    content = re.sub(r'onsubmit="[^"]*"', r'onSubmit={(e) => e.preventDefault()}', content)
    
    # onclick -> onClick
    content = re.sub(r'onclick="[^"]*"', r'onClick={() => {}}', content)
    
    # required="true" -> required
    content = re.sub(r'required="true"', r'required', content)
    content = re.sub(r'required="required"', r'required', content)
    
    # tabindex -> tabIndex
    content = re.sub(r'tabindex="([^"]*)"', r'tabIndex={\1}', content)
    
    # other camelCase fixes
    fixes = {
        'autocomplete=': 'autoComplete=',
        'maxlength=': 'maxLength=',
        'readonly=': 'readOnly=',
        'viewbox=': 'viewBox=',
        'stroke-width=': 'strokeWidth=',
        'stroke-linecap=': 'strokeLinecap=',
        'stroke-linejoin=': 'strokeLinejoin=',
        'fill-rule=': 'fillRule=',
        'clip-rule=': 'clipRule=',
        'stroke-miterlimit=': 'strokeMiterlimit=',
        'xml:space=': 'xmlSpace=',
    }
    for k, v in fixes.items():
        content = content.replace(k, v)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
